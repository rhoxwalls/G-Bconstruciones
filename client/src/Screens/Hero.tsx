
import hero from '../assets/hero.png';

export const Hero = () => {
  return (
   <section 
   className="relative h-screen flex items-center justify-center bg-cover bg-center"
   style={{backgroundImage:`url(${hero})`}}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Los cimientos de tu futuro
        </h1>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
          Soluciones de ingeniería y arquitectura con los más altos estándares de calidad y seguridad.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-bold transition">
          Ver Obras
        </button>
      </div>
    </section>
    
  )
}
