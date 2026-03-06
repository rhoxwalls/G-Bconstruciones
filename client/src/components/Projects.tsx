import { useState } from 'react';


interface GalleryItem {
  src: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  mainImage: string;
  gallery?: GalleryItem[]; // Cambiado a objeto con descripción
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Funciones de navegación para el Nivel 2
  // const nextImage = () => {
  //   if (selectedProject?.gallery && currentIndex !== null) {
  //     setCurrentIndex((currentIndex + 1) % selectedProject.gallery.length);
  //   }
  // };

  // const prevImage = () => {
  //   if (selectedProject?.gallery && currentIndex !== null) {
  //     setCurrentIndex((currentIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  //   }
  // };

  // const selectedImage = (selectedProject?.gallery && currentIndex !== null) 
  //   ? selectedProject.gallery[currentIndex] 
  //   : null;

  return (
    <section className="py-14 bg-slate-50 relative rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 uppercase tracking-wider">
          Nuestras Obras
        </h2>

        {/* Carrusel */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-75 md:min-w-100 snap-start cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden rounded-xl shadow-lg relative">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="mt-4 font-bold text-xl text-slate-700">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* NIVEL 1: Modal de Galería de la Obra */}
        {selectedProject && (
          <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="p-6 border-b flex justify-between items-center bg-slate-900 text-white">
                <h3 className="text-xl font-bold uppercase">Proyecto: {selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                >
                  Cerrar ✕
                </button>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto  md:grid-cols-2 gap-4 space-y-8 scroll-smooth">
                {selectedProject.gallery?.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg group"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.src}
                      alt={`Obra ${index}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all flex items-center justify-center">
                       <span className="text-white opacity-0 group-hover:opacity-100 font-bold">Ver detalle</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NIVEL 2: Modal de Tarjeta de Imagen Individual */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-in zoom-in-95 duration-200">
            <div className="bg-white rounded-xl overflow-hidden max-w-lg w-full shadow-2xl">
              <img 
                src={selectedImage.src} 
                className="w-full h-80 object-cover" 
                alt="Detalle" 
              />
              <div className="p-6">
                <h4 className="text-orange-600 font-bold uppercase text-sm mb-2">Detalle de construcción</h4>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {selectedImage.description || "Sin descripción disponible para esta imagen."}
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="mt-6 w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
                >
                  Volver a la galería
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}