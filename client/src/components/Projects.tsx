// import { useState } from 'react';


// interface GalleryItem {
//   src: string;
//   description: string;
// }

// interface Project {
//   id: string;
//   title: string;
//   mainImage: string;
//   gallery?: GalleryItem[]; // Cambiado a objeto con descripción
// }

// export default function ProjectsSection({ projects }: { projects: Project[] }) {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

//   Funciones de navegación para el Nivel 2
//   const nextImage = () => {
//     if (selectedProject?.gallery && currentIndex !== null) {
//       setCurrentIndex((currentIndex + 1) % selectedProject.gallery.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProject?.gallery && currentIndex !== null) {
//       setCurrentIndex((currentIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
//     }
//   };

//   const selectedImage = (selectedProject?.gallery && currentIndex !== null) 
//     ? selectedProject.gallery[currentIndex] 
//     : null;

//   return (
//     <section className="py-14 bg-slate-50 relative rounded-2xl ">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-slate-800 uppercase tracking-wider">
//           Nuestras Obras
//         </h2>

//         {/* Carrusel */}
//         <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="min-w-75 md:min-w-100 snap-start cursor-pointer group"
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="overflow-hidden rounded-xl shadow-lg relative">
//                 <img
//                   src={project.mainImage}
//                   alt={project.title}
//                   className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
//               </div>
//               <h3 className="mt-4 font-bold text-xl text-slate-700">{project.title}</h3>
//             </div>
//           ))}
//         </div>

//         {/* NIVEL 1: Modal de Galería de la Obra */}
//         {selectedProject && (
//           <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
//             <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
//               <div className="p-6 border-b flex justify-between items-center bg-slate-900 text-white">
//                 <h3 className="text-xl font-bold uppercase">Proyecto: {selectedProject.title}</h3>
//                 <button 
//                   onClick={() => setSelectedProject(null)}
//                   className="p-2 hover:bg-white/20 rounded-full transition"
//                 >
//                   Cerrar ✕
//                 </button>
//               </div>
              
//               <div className="flex-1 p-6 overflow-y-auto  md:grid-cols-2 gap-4 space-y-8 scroll-smooth">
//                 {selectedProject.gallery?.map((item, index) => (
//                   <div 
//                     key={index} 
//                     className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg group"
//                     onClick={() => setSelectedImage(item)}
//                   >
//                     <img
//                       src={item.src}
//                       alt={`Obra ${index}`}
//                       className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                     />
//                     <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all flex items-center justify-center">
//                        <span className="text-white opacity-0 group-hover:opacity-100 font-bold">Ver detalle</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* NIVEL 2: Modal de Tarjeta de Imagen Individual */}
//         {selectedImage && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-in zoom-in-95 duration-200">
//             <div className="bg-white rounded-xl overflow-hidden max-w-lg w-full shadow-2xl">
//               <img 
//                 src={selectedImage.src} 
//                 className="w-full h-80 object-cover" 
//                 alt="Detalle" 
//               />
//               <div className="p-6">
//                 <h4 className="text-orange-600 font-bold uppercase text-sm mb-2">Detalle de construcción</h4>
//                 <p className="text-slate-700 text-lg leading-relaxed">
//                   {selectedImage.description || "Sin descripción disponible para esta imagen."}
//                 </p>
//                 <button 
//                   onClick={() => setSelectedImage(null)}
//                   className="mt-6 w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
//                 >
//                   Volver a la galería
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }


import { useState } from 'react';

interface GalleryItem {
  src: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  mainImage: string;
  gallery?: GalleryItem[];
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // USAMOS EL ÍNDICE para saber en qué foto estamos
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Funciones de navegación
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita cerrar el modal por error
    if (selectedProject?.gallery) {
      setCurrentIndex((prev) => 
        prev !== null ? (prev + 1) % selectedProject.gallery!.length : 0
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentIndex((prev) => 
        prev !== null ? (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length : 0
      );
    }
  };

  // Obtenemos la imagen actual basada en el índice
  const currentImage = (selectedProject?.gallery && currentIndex !== null) 
    ? selectedProject.gallery[currentIndex] 
    : null;

  return (
    <section className="py-14 bg-slate-50 relative rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 uppercase tracking-wider">
          Nuestras Obras
        </h2>

        {/* Carrusel Principal */}
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

        {/* NIVEL 1: Modal de Galería */}
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
              
              <div className="flex-1 p-6 overflow-y-auto gap-6 space-y-0 scroll-smooth">
                {selectedProject.gallery?.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-video cursor-zoom-in overflow-hidden rounded-lg group border border-slate-200"
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img
                      src={item.src}
                      alt={`Obra ${index}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                       <span className="text-white opacity-0 group-hover:opacity-100 font-bold bg-orange-600 px-4 py-2 rounded-full shadow-lg">Ver detalle</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NIVEL 2: Modal de Tarjeta con Navegación */}
        {currentImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-in zoom-in-95 duration-200">
            
            {/* Botón Anterior */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 z-[60] text-white hover:text-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl relative">
              <div className="relative group">
                <img 
                  src={currentImage.src} 
                  className="w-full h-64 md:h-96 object-contain bg-slate-100" 
                  alt="Detalle" 
                />
                {/* Contador de imágenes */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-mono">
                  {(currentIndex || 0) + 1} / {selectedProject?.gallery?.length}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-orange-600 font-bold uppercase text-sm mb-2">Especificaciones de Obra</h4>
                <p className="text-slate-700 text-lg leading-relaxed min-h-[60px]">
                  {currentImage.description || "Sin descripción disponible."}
                </p>
                <div className="mt-6 flex gap-3">
                    <button 
                    onClick={() => setCurrentIndex(null)}
                    className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition"
                    >
                    Volver a la galería
                    </button>
                </div>
              </div>
            </div>

            {/* Botón Siguiente */}
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 z-[60] text-white hover:text-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        )}

      </div>
    </section>
  );
}