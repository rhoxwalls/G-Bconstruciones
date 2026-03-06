import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png';
export const Nav = () => {
  return (
    <div className="min-h-screen font-sans">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-end justify-between">
          <Link title="Inicio" to="/">
            <img src={logo} alt="logo" className="h-50 w-30 relative top-19"/>
          </Link>
          <div className="space-x-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-orange-600 transition">Inicio</a>
            <a href="#us" className="hover:text-orange-600 transition">Proyectos</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contacto</a>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
