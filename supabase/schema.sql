-- ==========================================
-- David Ames Academy - Supabase Schema
-- Ejecuta este script en el SQL Editor de Supabase
-- ==========================================

-- 1. Crear tabla de perfiles (extendiendo auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  name text,
  avatar text,
  bio text,
  plan text default 'free',
  points integer default 0,
  streak integer default 0,
  position integer default 999
);

alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- Trigger para crear perfil automáticamente al registrarse
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, avatar)
  values (new.id, new.raw_user_meta_data->>'name', 'https://api.dicebear.com/7.x/avataaars/svg?seed=' || new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Crear tabla de cursos
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  long_description text,
  category text,
  category_label text,
  level text,
  price numeric default 0,
  is_free boolean default false,
  rating numeric default 0,
  students integer default 0,
  instructor text,
  duration text,
  lessons_count integer default 0,
  thumbnail text,
  is_new boolean default false,
  is_popular boolean default false,
  what_you_learn text[],
  requirements text[],
  for_who text[]
);
alter table public.courses enable row level security;
create policy "Courses are viewable by everyone." on courses for select using (true);

-- 3. Crear tabla de módulos
create table public.modules (
  id uuid default gen_random_uuid() primary key,
  course_id uuid references public.courses on delete cascade not null,
  title text not null,
  order_index integer default 0
);
alter table public.modules enable row level security;
create policy "Modules are viewable by everyone." on modules for select using (true);

-- 4. Crear tabla de lecciones
create table public.lessons (
  id uuid default gen_random_uuid() primary key,
  module_id uuid references public.modules on delete cascade not null,
  title text not null,
  duration text,
  is_free boolean default false,
  video_url text,
  description text,
  order_index integer default 0
);
alter table public.lessons enable row level security;
create policy "Lessons viewable by everyone." on lessons for select using (true);

-- 5. Inscripciones a cursos
create table public.enrolled_courses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  course_id uuid references public.courses on delete cascade not null,
  progress integer default 0,
  last_lesson_id uuid references public.lessons on delete set null,
  completed boolean default false,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.enrolled_courses enable row level security;
create policy "Users can view their own enrollments." on enrolled_courses for select using (auth.uid() = user_id);
create policy "Users can insert their own enrollments." on enrolled_courses for insert with check (auth.uid() = user_id);
create policy "Users can update their own enrollments." on enrolled_courses for update using (auth.uid() = user_id);

-- 6. Progreso de lecciones (Vistas)
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  lesson_id uuid references public.lessons on delete cascade not null,
  completed boolean default false,
  completed_at timestamp with time zone default timezone('utc'::text, now())
);
alter table public.user_progress enable row level security;
create policy "Users can view their own progress." on user_progress for select using (auth.uid() = user_id);
create policy "Users can update their own progress." on user_progress for all using (auth.uid() = user_id);

-- Insertar Badges y vincular
create table public.badges (
  id text primary key,
  name text not null,
  icon text not null,
  description text not null,
  points_required integer default 0
);
alter table public.badges enable row level security;
create policy "Badges viewable by everyone." on badges for select using (true);

create table public.user_badges (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  badge_id text references public.badges on delete cascade not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, badge_id)
);
alter table public.user_badges enable row level security;
create policy "Users can view own unlocked badges." on user_badges for select using (auth.uid() = user_id);

-- Semilla (Seed) inicial de insignias
insert into public.badges (id, name, icon, description, points_required) values 
('first-lesson', 'Primera Lección', '🎓', 'Completa tu primera lección', 0),
('first-course', 'Curso Completado', '🏆', 'Termina tu primer curso', 0),
('ia-expert', 'Experto en IA', '🤖', 'Completa 5 cursos de IA', 500),
('marketing-pro', 'Marketing Master', '📊', 'Completa 5 cursos de Marketing', 500),
('streak-7', 'Racha de Fuego', '🔥', '7 días consecutivos aprendiendo', 200);


-- 7. Hilos del foro (Comunidad)
create table public.forum_threads (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  title text not null,
  content text not null,
  category text not null,
  upvotes integer default 0,
  replies_count integer default 0,
  solved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.forum_threads enable row level security;
create policy "Threads are viewable by everyone." on forum_threads for select using (true);
create policy "Authenticated users can post threads." on forum_threads for insert with check (auth.uid() = user_id);
create policy "Authors can update their threads." on forum_threads for update using (auth.uid() = user_id);

-- 8. Respuestas del foro
create table public.forum_replies (
  id uuid default gen_random_uuid() primary key,
  thread_id uuid references public.forum_threads on delete cascade not null,
  user_id uuid references public.profiles on delete cascade not null,
  content text not null,
  upvotes integer default 0,
  is_answer boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.forum_replies enable row level security;
create policy "Replies are viewable by everyone." on forum_replies for select using (true);
create policy "Authenticated users can post replies." on forum_replies for insert with check (auth.uid() = user_id);

-- Trigger: incrementar replies_count en forum_threads al insertar respuesta
create function public.increment_thread_replies()
returns trigger as $$
begin
  update public.forum_threads
  set replies_count = replies_count + 1
  where id = NEW.thread_id;
  return NEW;
end;
$$ language plpgsql security definer;

create trigger on_forum_reply_created
  after insert on public.forum_replies
  for each row execute procedure public.increment_thread_replies();
