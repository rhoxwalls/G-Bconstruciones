import grupo from "../assets/grupoGyB.png";
import pool from "../assets/mockups/pool.png";
import front from "../assets/mockups/front.jpeg";
import pasillo from "../assets/mockups/pasillo.jpeg";
import hall from "../assets/mockups/hall.jpeg";
import images from "../assets/mockups/3images.jpeg";
import durlock from "../assets/mockups/durlock.jpeg";
import electric from "../assets/mockups/electric.jpeg";
import repair from "../assets/mockups/repair.jpeg";
import albañileria from "../assets/mockups/abalilerie.jpeg";
import paint from "../assets/mockups/paint.jpeg";
import plomeria from "../assets/mockups/plumber.jpeg";
import { StatsSection } from "../components/StatsSections";

import { useState, useMemo } from "react";

// Definimos una interfaz para el módulo de imagen
interface ImageModule {
  default: string;
}

export const Us = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // 1. Cargamos todas las imágenes de la carpeta assets/obras
  // Cambia './assets/obras/*.jpg' por tu ruta real
  const imageModules = import.meta.glob(
    "../assets/ProjectsData/Projects/**/*.{png,jpg,jpeg,webp}",
    { eager: true },
  );

  const allImages = useMemo(() => {
    const modulesArray = Object.keys(imageModules);

    return modulesArray.map((path) => {
      // Normalizamos la ruta para evitar problemas de / o \
      const cleanPath = path.replace(/\\/g, "/");
      const pathParts = cleanPath.split("/");

      // Obtenemos el nombre de la carpeta (penúltimo elemento)
      const folderName = pathParts[pathParts.length - 2];
      const fileName = pathParts.pop()?.replace(/\.[^/.]+$/, "") || "";

      // Separamos por el guion (-)
      const parts = fileName.split("-");
      const order = parseInt(parts[0]) || 0;
      const title = parts[1] || "Sin título";
      const description =
        parts.slice(2).join(" ") || "Sin descripción disponible.";

      return {
        folder: folderName,
        order,
        title: title.replace(/_/g, " "),
        description,
        img: (imageModules[path] as ImageModule).default,
      };
    });
  }, [imageModules]);


  // 3. Obtenemos una lista de obras únicas para el Carrusel (una foto por carpeta)
  const projectsMenu = useMemo(() => {
    const uniqueFolders = Array.from(
      new Set(allImages.map((img) => img.folder)),
    );
    return uniqueFolders.map((folder) => {
      // Usamos la imagen con order 1 (o la primera que encuentre) como portada
      const coverImg =
        allImages.find((img) => img.folder === folder && img.order === 1) ||
        allImages.find((img) => img.folder === folder);
      return {
        name: folder,
        cover: coverImg?.img,
        totalSteps: allImages.filter((img) => img.folder === folder).length,
      };
    });
  }, [allImages]);

  // 4. Filtramos las imágenes de la obra seleccionada para el Modal
  const currentProjectSteps = useMemo(() => {
    if (!selectedProject) return [];
    return allImages
      .filter((img) => img.folder === selectedProject)
      .sort((a, b) => a.order - b.order);
  }, [allImages, selectedProject]);

  return (
    <section id="us" className="min-h-screen">
      <h3 className="text-5xl text-orange-600 font-extrabold border-l-30 border-blue-900 p-4 mt-4">
        QUIENES SOMOS?
      </h3>
      <div>
        <img
          src={grupo}
          alt="personal"
          className="drop-shadow-black drop-shadow-2xl blur-xs"
        />
        <p className="mx-auto mb-4 p-4 text-justify [text-justify:inter-word] [hyphens:auto] text-pretty leading-relaxed">
          Detrás de cada gran estructura, hay un gran equipo. Creemos que la
          excelencia nace del trabajo conjunto. Desde la dirección técnica que
          traza el camino, hasta el personal de campo que pone el hombro en cada
          jornada. En GyB nos mueve un mismo objetivo: construir el futuro de
          nuestros clientes con la máxima seguridad y compromiso.
        </p>
      </div>
      <StatsSection />
      <h3 className="text-5xl text-end text-blue-900 font-extrabold border-r-30 border-orange-600 p-4 mt-4 mb-8">
        SERVICIOS
      </h3>
      <div className="grid grid-cols-1 gird-rows-3 gap-4">
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={albañileria}
              alt="albañileria"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Albañileria
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Especialistas en obra gruesa y fina. Realizamos desde cimientos y
              levantamiento de muros hasta revoques técnicos y colocación de
              pisos. Construimos con materiales de primera calidad asegurando la
              solidez estructural que tu hogar o empresa necesita."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={electric}
              alt="electricidad"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Electricidad
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Instalaciones eléctricas completas bajo normas de seguridad
              vigentes. Realizamos cableados, tableros térmicos, iluminación LED
              y arreglos domiciliarios de urgencia. Seguridad y eficiencia
              energética para proteger a tu familia y tus equipos."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={paint}
              alt="Pintura"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Pintura
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Acabados profesionales para interiores y exteriores. Aplicamos
              técnicas avanzadas en látex, sintéticos y revestimientos plásticos
              tipo Tarquini. Cuidamos cada detalle y protegemos tus ambientes
              para un resultado estético, limpio y duradero."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={durlock}
              alt="Durlock"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Durlock
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Soluciones rápidas y modernas para la división de ambientes.
              Instalación de tabiques, cielorrasos suspendidos y revestimientos
              antihumedad. Un acabado liso perfecto, ideal para optimizar
              espacios con aislamiento térmico y acústico."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={plomeria}
              alt="plomeria"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Plomeria
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Instalaciones integrales de agua y gas. Realizamos tendidos de
              cañerías por termofusión, reparación de filtraciones, instalación
              de sanitarios y mantenimiento de tanques. Soluciones eficientes
              para garantizar el correcto flujo de tu propiedad."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          {/* Contenedor de la imagen: fijos para que no se deformen */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={repair}
              alt="reparaciones"
              className="w-full h-full object-contain rounded-full border border-amber-500/30 group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Contenedor del texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-amber-500 font-bold text-lg uppercase tracking-tight mb-1">
              Reparaciones
            </h3>
            <p className="text-black text-sm leading-relaxed">
              "Expertos en patologías de la construcción. Solucionamos problemas
              críticos de humedad, filtraciones en techos, grietas estructurales
              y desprendimientos. Diagnosticamos el origen del problema para
              ofrecerte una reparación definitiva."
            </p>
          </div>
        </div>
      </div>

      <section id="projects" className="bg-white py-20">
        <div>
          <h3 className="mt-14  mb-6 w-fit mx-auto font-extrabold text-center text-7xl border-b-5 border-amber-600 text-blue-900">
            Proyectos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-3/4 shadow-xl">
              <img
                src={front}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                alt="hall"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                  Terminado
                </span>
                <h4 className="text-white font-bold text-xl mt-1">Frente</h4>
                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores soluta, delectus blanditiis porro quas minus corporis deserunt ab hic! Sed itaque ea rerum adipisci, recusandae velit minima placeat tempore.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-3/4 shadow-xl">
              <img
                src={hall}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                alt="hall"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                  Terminado
                </span>
                <h4 className="text-white font-bold text-xl mt-1">Hall</h4>
                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores consectetur repudiandae facere necessitatibus, voluptate inventore beatae reiciendis, cum sint, officiis culpa suscipit aliquam sit perspiciatis nihil quas nostrum ea!
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-3/4 shadow-xl">
              <img
                src={pasillo}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                alt="hall"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                  Terminado
                </span>
                <h4 className="text-white font-bold text-xl mt-1">Hall</h4>
                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda asperiores soluta, delectus blanditiis porro quas
                  minus corporis deserunt ab hic! Sed itaque ea rerum adipisci,
                  recusandae velit minima placeat tempore.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-3/4 shadow-xl">
              <img
                src={images}
                className="absolute inset-0 h-full w-full object-fill opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                alt="hall"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                  Terminado
                </span>
                <h4 className="text-white font-bold text-xl mt-1">Hall</h4>
                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda asperiores soluta, delectus blanditiis porro quas
                  minus corporis deserunt ab hic! Sed itaque ea rerum adipisci,
                  recusandae velit minima placeat tempore.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-3/4 shadow-xl">
              <img
                src={pool}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                alt="hall"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
                  Terminado
                </span>
                <h4 className="text-white font-bold text-xl mt-1">Hall</h4>
                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda asperiores soluta, delectus blanditiis porro quas
                  minus corporis deserunt ab hic! Sed itaque ea rerum adipisci,
                  recusandae velit minima placeat tempore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="gallery">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="mb-16 w-fit mx-auto font-black text-center text-5xl md:text-7xl border-b-8 border-amber-600 text-slate-900 uppercase italic tracking-tighter">
            Galeria
          </h3>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Evolución de Obras
              </h4>
              <p className="text-slate-500 italic border-l-4 border-amber-600 pl-4">
                Seleccione una obra para ver la bitácora técnica.
              </p>
            </div>

            {/* Carrusel de Obras (Menu principal) */}
            <div className="flex overflow-x-auto gap-8 pb-8 ">
              {projectsMenu.map((project) => (
                <div
                  key={project.name}
                  onClick={() => setSelectedProject(project.name)}
                  className="min-w-[320px] md:min-w-100 snap-start cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
                    <img
                      src={project.cover}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-50 transition duration-700"
                      alt={project.name}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black/80 to-transparent">
                      <span className="text-amber-500 font-black text-sm uppercase">
                        Proyecto activo
                      </span>
                      <h5 className="text-white font-black text-2xl uppercase italic">
                        {project.name}
                      </h5>
                      <p className="text-slate-300 text-xs mt-1">
                        {project.totalSteps} Instancias registradas
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. MODAL DE BITÁCORA */}
        {selectedProject && (
          <div className="fixed inset-0 z-100 bg-slate-950 flex flex-col p-6 animate-in fade-in duration-300">
            {/* ... contenido del modal (se mantiene igual) ... */}
            <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto w-full">
              <div>
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
                  Bitácora Técnica
                </span>
                <h2 className="text-white text-3xl font-black italic flex">
                  {selectedProject}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white z-100 text-5xl hover:text-amber-500 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="max-w-6xl mx-auto w-full overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-32 pb-32">
                {currentProjectSteps.map((step, index) => (
                  <div
                    key={step.order}
                    className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="w-full md:w-3/5">
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-amber-600/20 rounded-2xl blur group-hover:bg-amber-600/40 transition duration-500"></div>
                        <img
                          src={step.img}
                          className="relative rounded-xl shadow-2xl border-2 border-slate-800 w-full object-cover"
                          alt={step.title}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/5 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-600 text-slate-950 font-black px-3 py-1 text-xl italic">
                          #{step.order.toString().padStart(2, "0")}
                        </span>
                        <div className="h-px grow bg-slate-800"></div>
                      </div>
                      <h4 className="text-white text-3xl font-black uppercase tracking-tight leading-none">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-lg leading-relaxed italic border-l-4 border-amber-600 pl-6">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </section>
      </section>
    </section> // Solo debe haber un cierre de section aquí para cerrar el principal
  );
};
