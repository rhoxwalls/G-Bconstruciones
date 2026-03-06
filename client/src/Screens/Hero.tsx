import hero from '../assets/hero.mp4';

export const Hero = () => {
  return (
    <section 
      id='inicio'
      className="relative h-[170vh] flex items-center justify-center overflow-hidden"
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline // Importante para que funcione en móviles (iOS)
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={hero} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Contenedor de Contenido: Usamos text-center para mejor estética en Hero */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl">
        
        {/* Título: Ajustamos tamaños por breakpoint y quitamos el mb-56 */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Los cimientos de <br className="hidden md:block" /> tu futuro
        </h1>

        {/* Texto: Quitamos mt-56 y usamos márgenes razonables */}
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10">
          Soluciones de ingeniería y arquitectura con los más altos estándares de calidad y seguridad.
        </p>

        {/* Botón */}
        <button 
          onClick={() => document.getElementById('us')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-md font-bold transition-all transform hover:scale-105 shadow-xl"
        >
          Ver Obras
        </button>
      </div>
    </section>
  );
};