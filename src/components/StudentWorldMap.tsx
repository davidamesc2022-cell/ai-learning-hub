import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Datos de estudiantes por país (coordenadas [lon, lat])
const STUDENT_HUBS = [
  { country: "Perú",       coords: [-75.0, -10.0] as [number,number], students: 847,  flag: "🇵🇪" },
  { country: "México",     coords: [-102.5, 23.6] as [number,number], students: 512,  flag: "🇲🇽" },
  { country: "Argentina",  coords: [-63.6, -38.4] as [number,number], students: 340,  flag: "🇦🇷" },
  { country: "Colombia",   coords: [-74.3, 4.5]   as [number,number], students: 289,  flag: "🇨🇴" },
  { country: "Ecuador",    coords: [-78.1, -1.8]  as [number,number], students: 198,  flag: "🇪🇨" },
  { country: "Chile",      coords: [-71.5, -35.7] as [number,number], students: 176,  flag: "🇨🇱" },
  { country: "España",     coords: [-3.7, 40.4]   as [number,number], students: 143,  flag: "🇪🇸" },
  { country: "Venezuela",  coords: [-66.6, 8.0]   as [number,number], students: 134,  flag: "🇻🇪" },
  { country: "Bolivia",    coords: [-64.9, -16.3] as [number,number], students: 98,   flag: "🇧🇴" },
  { country: "Paraguay",   coords: [-58.4, -23.4] as [number,number], students: 67,   flag: "🇵🇾" },
  { country: "Uruguay",    coords: [-56.0, -32.5] as [number,number], students: 54,   flag: "🇺🇾" },
  { country: "EE.UU.",     coords: [-100.0, 38.0] as [number,number], students: 89,   flag: "🇺🇸" },
];

const totalStudents = STUDENT_HUBS.reduce((a, b) => a + b.students, 0);

function getRadius(students: number) {
  const max = Math.max(...STUDENT_HUBS.map(h => h.students));
  return 4 + (students / max) * 14;
}

export default function StudentWorldMap() {
  const [tooltip, setTooltip] = useState<{ country: string; students: number; flag: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-green-400">Comunidad activa en todo el mundo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Nuestra Comunidad es{" "}
            <span className="gradient-hero-text">Global</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Estudiantes de <span className="text-white font-semibold">{STUDENT_HUBS.length}+ países</span> ya están transformando su carrera con David Ames Academy.
          </p>
        </div>

        {/* Mapa */}
        <div className="relative bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
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
              className="fixed z-50 bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-2 shadow-2xl text-sm pointer-events-none"
              style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 40 }}
            >
              <span className="font-bold">{tooltip.flag} {tooltip.country}</span>
              <br />
              <span className="text-cyan-400 font-semibold">{tooltip.students.toLocaleString()} estudiantes</span>
            </div>
          )}
        </div>

        {/* Estadísticas por país */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
                {totalStudents.toLocaleString()}+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
