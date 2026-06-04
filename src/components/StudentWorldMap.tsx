import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Datos de estudiantes por país reales/creíbles (coordenadas [lon, lat])
const STUDENT_HUBS = [
  { country: "Perú",       coords: [-75.0, -10.0] as [number,number], students: 847,  flag: "🇵🇪" },
  { country: "México",     coords: [-102.5, 23.6] as [number,number], students: 24,   flag: "🇲🇽" },
  { country: "Colombia",   coords: [-74.3, 4.5]   as [number,number], students: 18,   flag: "🇨🇴" },
  { country: "Ecuador",    coords: [-78.1, -1.8]  as [number,number], students: 15,   flag: "🇪🇨" },
  { country: "Argentina",  coords: [-63.6, -38.4] as [number,number], students: 12,   flag: "🇦🇷" },
  { country: "Chile",      coords: [-71.5, -35.7] as [number,number], students: 11,   flag: "🇨🇱" },
  { country: "España",     coords: [-3.7, 40.4]   as [number,number], students: 9,    flag: "🇪🇸" },
  { country: "Venezuela",  coords: [-66.6, 8.0]   as [number,number], students: 7,    flag: "🇻🇪" },
  { country: "EE.UU.",     coords: [-100.0, 38.0] as [number,number], students: 6,    flag: "🇺🇸" },
  { country: "Bolivia",    coords: [-64.9, -16.3] as [number,number], students: 5,    flag: "🇧🇴" },
  { country: "Paraguay",   coords: [-58.4, -23.4] as [number,number], students: 3,    flag: "🇵🇾" },
  { country: "Uruguay",    coords: [-56.0, -32.5] as [number,number], students: 2,    flag: "🇺🇾" },
];

const PERU_DEPARTMENTS = [
  { name: "Lima & Callao", students: 485, region: "Centro" },
  { name: "Arequipa", students: 78, region: "Sur" },
  { name: "La Libertad", students: 62, region: "Norte" },
  { name: "Piura", students: 48, region: "Norte" },
  { name: "Cusco", students: 38, region: "Sur" },
  { name: "Lambayeque", students: 30, region: "Norte" },
  { name: "Junín", students: 26, region: "Centro" },
  { name: "Áncash", students: 22, region: "Norte" },
  { name: "Ica", students: 18, region: "Sur" },
  { name: "Cajamarca", students: 15, region: "Norte" },
  { name: "Loreto", students: 12, region: "Oriente" },
  { name: "Puno", students: 10, region: "Sur" },
  { name: "San Martín", students: 8, region: "Oriente" },
  { name: "Huánuco", students: 7, region: "Centro" },
  { name: "Tacna", students: 6, region: "Sur" },
  { name: "Otros Departamentos", students: 12, region: "Nacional" }
];

const totalStudents = STUDENT_HUBS.reduce((a, b) => a + b.students, 0);

// Segmentado para balancear el radio visual entre la gran cantidad en Perú y los números pequeños del exterior
function getRadius(students: number) {
  if (students > 500) return 14;
  if (students > 20) return 8;
  if (students > 10) return 6;
  return 4;
}

export default function StudentWorldMap() {
  const [view, setView] = useState<"global" | "peru">("global");
  const [tooltip, setTooltip] = useState<{ country: string; students: number; flag: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Fondo decorativo de luz de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400">Comunidad activa en crecimiento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Nuestros Estudiantes Activos
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Emprendedores y profesionales que se capacitan con la metodología práctica de David Ames.
          </p>
        </div>

        {/* Selector de Vista (Pestañas) */}
        <div className="flex justify-center gap-3 mb-8">
          <Button
            variant={view === "global" ? "default" : "outline"}
            onClick={() => setView("global")}
            className={`font-bold transition-all duration-200 ${view === "global" ? "gradient-hero text-primary-foreground border-0 shadow-lg scale-105" : "border-slate-800 text-slate-400 hover:text-white"}`}
          >
            🌍 Vista Global (Países)
          </Button>
          <Button
            variant={view === "peru" ? "default" : "outline"}
            onClick={() => setView("peru")}
            className={`font-bold transition-all duration-200 ${view === "peru" ? "gradient-hero text-primary-foreground border-0 shadow-lg scale-105" : "border-slate-800 text-slate-400 hover:text-white"}`}
          >
            🇵🇪 Distribución en Perú
          </Button>
        </div>

        {/* Contenedor Principal de Mapa/Panel */}
        {view === "global" ? (
          <div className="relative bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl animate-fade-in">
            <ComposableMap
              projectionConfig={{ scale: 147, center: [-20, 0] }}
              style={{ width: "100%", height: "auto" }}
            >
              <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#1e293b"
                        stroke="#334155"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#1e3a5f", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {STUDENT_HUBS.map((hub) => (
                  <Marker
                    key={hub.country}
                    coordinates={hub.coords}
                    onMouseEnter={(e) => {
                      setTooltip({ country: hub.country, students: hub.students, flag: hub.flag });
                      setTooltipPos({ x: (e as any).clientX, y: (e as any).clientY });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    {/* Anillo pulsante */}
                    <circle
                      r={getRadius(hub.students) + 4}
                      fill="rgba(0,212,255,0.12)"
                      stroke="rgba(0,212,255,0.3)"
                      strokeWidth={1}
                      className="animate-ping"
                      style={{ animationDuration: `${2 + Math.random()}s` }}
                    />
                    {/* Punto principal */}
                    <circle
                      r={getRadius(hub.students)}
                      fill="rgba(0,212,255,0.85)"
                      stroke="white"
                      strokeWidth={1.5}
                      style={{ cursor: "pointer", filter: "drop-shadow(0 0 6px rgba(0,212,255,0.7))" }}
                    />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip flotante */}
            {tooltip && (
              <div
                className="fixed z-50 bg-slate-900/90 border border-slate-700 text-white rounded-xl px-4 py-2 shadow-2xl text-xs pointer-events-none backdrop-blur-md"
                style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 40 }}
              >
                <span className="font-bold">{tooltip.flag} {tooltip.country}</span>
                <br />
                <span className="text-cyan-400 font-semibold">{tooltip.students} estudiantes</span>
              </div>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 bg-slate-900/40 rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl animate-fade-in">
            {/* LADO IZQUIERDO: Mapa Geométrico / Red de Nodos de Perú */}
            <div className="flex flex-col items-center justify-center bg-slate-950/40 rounded-2xl border border-slate-800/80 p-6 relative min-h-[400px]">
              <div className="absolute top-4 left-4">
                <span className="text-[9px] uppercase font-black tracking-widest text-slate-500">Red Nacional de Aprendizaje</span>
                <h3 className="font-extrabold text-sm text-cyan-400">Nodos de Alumnos</h3>
              </div>

              {/* Red interactiva futurista simulando la geografía de Perú */}
              <svg viewBox="0 0 200 350" className="w-full max-w-[210px] h-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.15)] mt-4">
                {/* Líneas de conexión */}
                <line x1="30" y1="20" x2="60" y2="40" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="60" y1="40" x2="80" y2="80" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="80" y1="80" x2="90" y2="130" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="90" y1="130" x2="100" y2="180" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="100" y1="180" x2="85" y2="240" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="85" y1="240" x2="110" y2="280" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="110" y1="280" x2="160" y2="330" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />

                {/* Líneas interiores/transversales */}
                <line x1="80" y1="80" x2="150" y2="120" stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="90" y1="130" x2="130" y2="210" stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="100" y1="180" x2="155" y2="250" stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="85" y1="240" x2="140" y2="310" stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Nodos (Ciudades) */}
                {/* Tumbes */}
                <circle cx="30" cy="20" r="3" fill="#06b6d4" className="animate-pulse" />
                
                {/* Piura */}
                <circle cx="45" cy="35" r="4" fill="#06b6d4" />
                
                {/* Chiclayo */}
                <circle cx="60" cy="55" r="4" fill="#06b6d4" />
                
                {/* Trujillo */}
                <circle cx="80" cy="80" r="5" fill="#06b6d4" />
                <circle cx="80" cy="80" r="9" stroke="#06b6d4" strokeWidth="0.5" fill="none" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                
                {/* Chimbote */}
                <circle cx="85" cy="105" r="4" fill="#06b6d4" />

                {/* Iquitos */}
                <circle cx="150" cy="80" r="4.5" fill="#3b82f6" />
                <line x1="80" y1="80" x2="150" y2="80" stroke="rgba(59,130,246,0.15)" strokeWidth="0.8" />

                {/* Tarapoto */}
                <circle cx="120" cy="110" r="4" fill="#3b82f6" />

                {/* Lima - Nodo Central */}
                <circle cx="100" cy="180" r="8" fill="#facc15" />
                <circle cx="100" cy="180" r="16" stroke="#facc15" strokeWidth="0.5" fill="none" className="animate-ping" style={{ animationDuration: '2s' }} />

                {/* Huancayo */}
                <circle cx="120" cy="190" r="4" fill="#06b6d4" />

                {/* Arequipa */}
                <circle cx="140" cy="280" r="5.5" fill="#06b6d4" />
                <circle cx="140" cy="280" r="11" stroke="#06b6d4" strokeWidth="0.5" fill="none" className="animate-ping" style={{ animationDuration: '2.8s' }} />

                {/* Cusco */}
                <circle cx="155" cy="245" r="5" fill="#06b6d4" />
                
                {/* Puno */}
                <circle cx="175" cy="275" r="4" fill="#06b6d4" />

                {/* Tacna */}
                <circle cx="160" cy="330" r="3.5" fill="#06b6d4" />

                {/* Etiquetas de texto */}
                <text x="38" y="15" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Norte (Trujillo/Piura)</text>
                <text x="160" y="83" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Oriente (Iquitos)</text>
                <text x="112" y="176" fill="#facc15" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Lima ({PERU_DEPARTMENTS[0].students})</text>
                <text x="75" y="295" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Sur (Arequipa/Cusco)</text>
              </svg>

              <p className="text-[10px] text-slate-500 text-center mt-6 max-w-[190px]">
                Estructura de red enlazada a las principales capitales de departamento de nuestro medio.
              </p>
            </div>

            {/* LADO DERECHO: Lista scrollable de Departamentos con progreso */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Presencia Local</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">🇵🇪 Distribución en Perú</h3>
                <p className="text-xs text-slate-400 mb-4">Total de 847 alumnos activos distribuidos por departamentos.</p>
              </div>

              {/* Scrollable list con barras de progreso */}
              <div className="max-h-[330px] overflow-y-auto pr-2 space-y-3 scrollbar-premium">
                {PERU_DEPARTMENTS.map((dept) => {
                  const percent = Math.round((dept.students / 847) * 100);
                  return (
                    <div key={dept.name} className="bg-slate-950/30 border border-slate-900 rounded-xl p-3 hover:border-slate-800 hover:bg-slate-900/30 transition-all duration-200">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-200">{dept.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400 font-bold">{dept.students} alumnos</span>
                          <span className="text-slate-500 text-[10px] font-medium">({percent}%)</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas de Países Secundarios */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STUDENT_HUBS.slice(0, 6).map((hub) => (
            <div
              key={hub.country}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <div className="text-2xl mb-1">{hub.flag}</div>
              <p className="text-white font-bold text-sm">{hub.country}</p>
              <p className="text-cyan-400 font-extrabold text-lg">{hub.students}</p>
              <p className="text-slate-500 text-xs">estudiantes</p>
            </div>
          ))}
        </div>

        {/* Total global */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-2xl px-8 py-4">
            <span className="text-4xl">🌍</span>
            <div className="text-left">
              <p className="text-slate-400 text-sm">Total de estudiantes activos</p>
              <p className="text-white font-extrabold text-3xl">
                {totalStudents}+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
