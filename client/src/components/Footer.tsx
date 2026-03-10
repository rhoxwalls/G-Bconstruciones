import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">
            Constructora<span className="text-orange-500"> G y B</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Más de 20 años transformando planos en realidades sólidas y seguras. 
            Calidad garantizada en cada m².
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#/" className="hover:text-orange-500 transition">Inicio</a></li>
            <li><a href="#/proyectos" className="hover:text-orange-500 transition">Proyectos</a></li>
            <li><a href="#/servicios" className="hover:text-orange-500 transition">Servicios</a></li>
            <li><a href="#/contacto" className="hover:text-orange-500 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Calle Falsa 123, Ciudad</li>
            <li>📞 +54 11 1234-5678</li>
            <li>✉️ info@constructorapro.com</li>
          </ul>
        </div>

        {/* Columna 4: Newsletter/Certificaciones */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Boletín</h3>
          <p className="text-xs mb-4">Recibe actualizaciones de nuestras obras.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="bg-slate-800 border-none rounded-l px-3 py-2 w-full text-sm focus:ring-1 focus:ring-orange-500"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {currentYear} ConstructoraPro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}