import { useRef, useState } from 'react';
import hero from '../assets/ssdd.mp4';

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section 
      id='inicio'
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <video 
        ref={videoRef}
        autoPlay 
        loop
        muted
        playsInline 
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src={hero} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Contenedor de Contenido */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen py-20 text-center">
        
        {/* Título: Ajustado con leading y anchos máximos */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
          Los cimientos de <br className="hidden md:block" /> tu futuro
        </h1>

        {/* Texto: Max-width para que no se estire infinito en desktop */}
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl">
          Soluciones de ingeniería y arquitectura con los más altos estándares de calidad y seguridad.
        </p>

        {/* Botón Principal: Ancho automático en desktop, full en mobile */}
        <div className="w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('us')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-md font-bold transition-all transform hover:scale-105 shadow-xl w-full sm:w-64"
          >
            Ver Obras
          </button>
        </div>

        {/* BOTÓN MUTEADOR: Posicionamiento relativo al viewport (fijo abajo a la derecha) */}
        <button 
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-40 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-orange-600 transition-all shadow-2xl active:scale-95"
          title={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.59-.707-1.59-1.59V10.34c0-.883.71-1.59 1.59-1.59h2.74Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.59-.707-1.59-1.59V10.34c0-.883.71-1.59 1.59-1.59h2.74Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};