import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/web.jpg';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#us" },
    { name: "Proyectos", href: "#projects" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <div className="font-sans w-full">
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="contenedor-luz relative mt-24 inline-flex items-center space-x-2 cursor-default   hover:border-orange-600 transition-all">
            <video autoPlay loop muted playsInline className=" md:h-52 md:w-52 transition-all">
                <source src={logo} type="video/mp4"/>
                 navegador no soporta videos.
          </video>
          </div>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8 text-xl lg:text-3xl font-medium text-slate-900">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-orange-600 transition">
                {link.name}
              </a>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA (Nativo SVG) */}
          <div className="md:hidden z-900">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-900 hover:text-orange-600 transition"
              aria-label="Menu"
            >
              {isOpen ? (
                // Icono de Cerrar (X) nativo
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Icono de Hamburguesa (Menu) nativo
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

       
      </nav>

       {/* MENU MOBILE (Overlay) */}
        <div className={`
          fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-300 md:hidden z-900
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-bold hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
