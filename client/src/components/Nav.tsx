import { Link, Outlet } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="min-h-screen font-sans">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link title="Inicio" to="/" className="text-xl font-bold text-slate-900">
            Constructora <span className="text-orange-600">G & B</span>
          </Link>
          <div className="space-x-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-orange-600 transition">Inicio</Link>
            <Link to="/proyects" className="hover:text-orange-600 transition">Proyectos</Link>
            <Link to="/" className="hover:text-orange-600 transition">Nosotros</Link>
            <Link to="/" className="hover:text-orange-600 transition">Contacto</Link>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
