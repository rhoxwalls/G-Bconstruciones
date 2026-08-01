import { useState } from 'react';

// --- Interfaces mejoradas ---
interface GalleryItem {
  src: string;
  description: string;
  tag?: string; // Ej: "Estructura", "Terminaciones"
}

interface Project {
  id: string;
  title: string;
  location: string; // Añadimos ubicación
  category: string; // Ej: "Residencial", "Industrial"
  mainImage: string;
  gallery?: GalleryItem[];
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentIndex((prev) => (prev !== null ? (prev + 1) % selectedProject.gallery!.length : 0));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentIndex((prev) => (prev !== null ? (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length : 0));
    }
  };

  const currentImage = (selectedProject?.gallery && currentIndex !== null) 
    ? selectedProject.gallery[currentIndex] 
    : null;

  return (
    <section  className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Nuestras Obras</h2>
          </div>
          <p className="text-slate-500 max-w-md italic border-l-4 border-orange-600 pl-4">
            Calidad constructiva y compromiso arquitectónico en cada metro cuadrado.
          </p>
        </div>

        {/* Carrusel de Proyectos con Aspect Ratio Pro */}
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x no-scrollbar">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[320px] md:min-w-[450px] snap-start cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mt-1">{project.title}</h3>
                  <p className="text-slate-300 text-sm flex items-center gap-2 mt-2">
                    <span className="w-4 h-[1px] bg-orange-500"></span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NIVEL 1: Galería (Masonry-like Grid) */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-500">
            <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              
              <div className="p-6 md:p-8 border-b flex justify-between items-center bg-white text-slate-900">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{selectedProject.title}</h3>
                  <p className="text-orange-600 font-medium text-sm">Registro visual de obra</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-orange-600 hover:text-white rounded-full transition-all text-2xl"
                >✕</button>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50">
                {selectedProject.gallery?.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative cursor-zoom-in overflow-hidden rounded-xl shadow-sm group ${
                      index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img
                      src={item.src}
                      alt={`Obra ${index}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all flex items-end p-6">
                       <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all">
                        Expandir detalle
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NIVEL 2: Visor de Tarjeta (Arquitectura Premium) */}
        {currentImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/98 animate-in zoom-in-95 duration-300">
            
            <button onClick={prevImage} className="absolute left-4 md:left-10 z-[120] text-white/50 hover:text-orange-500 transition-colors">
              <svg className="w-12 h-12 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row">
              <button onClick={() => setCurrentIndex(null)} className="absolute top-4 right-4 z-[130] bg-white/10 hover:bg-orange-600 text-white md:text-slate-900 md:bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center transition">✕</button>
              
              <div className="md:w-2/3 bg-slate-100">
                <img src={currentImage.src} className="w-full h-[300px] md:h-[550px] object-contain" alt="Detalle" />
              </div>

              <div className="md:w-1/3 p-8 flex flex-col justify-center">
                <span className="text-orange-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Documentación Técnica</span>
                <h4 className="text-slate-900 font-black text-2xl mb-4 leading-tight">{selectedProject?.title}</h4>
                <div className="w-12 h-1 bg-orange-600 mb-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  "{currentImage.description}"
                </p>
                
                <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-xs font-mono">
                  <span>GYB CONSTRUCCIONES</span>
                  <span>{(currentIndex || 0) + 1} / {selectedProject?.gallery?.length}</span>
                </div>
              </div>
            </div>

            <button onClick={nextImage} className="absolute right-4 md:right-10 z-[120] text-white/50 hover:text-orange-500 transition-colors">
              <svg className="w-12 h-12 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}