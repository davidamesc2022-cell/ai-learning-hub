import { Link } from "react-router-dom";
import { Star, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/data/mockData";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link to={`/courses/${course.id}`} className="group">
      <div className="bg-card rounded-xl border border-border overflow-hidden card-hover-accent">
        {/* Thumbnail */}
        <div className="relative h-44 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
          <div className="text-4xl opacity-40">
            {course.category === "marketing" ? "📊" : "🤖"}
          </div>
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-card/90 backdrop-blur text-xs font-medium">{course.categoryLabel}</Badge>
          </div>
          <div className="absolute top-3 right-3 flex gap-1">
            {course.isNew && <Badge className="bg-success text-success-foreground border-0 text-xs">NUEVO</Badge>}
            {course.isPopular && <Badge className="bg-warning text-warning-foreground border-0 text-xs">POPULAR</Badge>}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">{course.level}</Badge>
          </div>
          <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{course.rating}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.students.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">David Ames</span>
            {course.isFree ? (
              <Badge className="bg-success/10 text-success border-success/30 font-semibold">Gratis</Badge>
            ) : (
              <span className="font-bold text-primary">${course.price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
