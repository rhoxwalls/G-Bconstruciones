import { Counter } from "./AnimatedCounter";

export const StatsSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          
          {/* Años de experiencia */}
          <div className="flex flex-col items-center">
            <div className="text-5xl font-black text-orange-500 mb-2">
              +<Counter end={15} />
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
              Años de experiencia
            </p>
          </div>

          
          {/* Proyectos en Curso */}
          <div className="flex flex-col items-center">
            <div className="text-5xl font-black text-orange-500 mb-2">
              +<Counter end={20} />
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
              Proyectos en curso
            </p>
          </div>

          {/* Proyectos Terminados */}
          <div className="flex flex-col items-center">
            <div className="text-5xl font-black text-orange-500 mb-2">
              +<Counter end={120} />
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
              Proyectos terminados
            </p>
          </div>

          {/* M2 Construidos */}
          <div className="flex flex-col items-center">
            <div className="text-5xl font-black text-orange-500 mb-2">
              +<Counter end={170} /> <span className="text-3xl">M2</span>
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
              Construidos
            </p>
          </div>

          {/* Número Grande (Inversión o similar) */}
          <div className="flex flex-col items-center">
            <div className="text-5xl font-black text-orange-500 mb-2">
              +<Counter end={1000000} />
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
              Ladrillos colocados
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};