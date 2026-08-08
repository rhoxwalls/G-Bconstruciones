export interface MaterialRequerido {
  nombre: string;
  unidad: string;
  cantidadPorUnidad: number;
}

// Mapeo editable: cada "trabajo" del manodeobra.json -> lista de materiales requeridos.
// cantidadPorUnidad = cantidad de material necesaria por cada unidad de trabajo
// (m2, ml, c/u, m3). La cantidad final se calcula como cantidadPorUnidad * cantidad ingresada.
export const MATERIALES_POR_TRABAJO: Record<string, MaterialRequerido[]> = {
  "Cavado y llenado de cimiento de 0 30 x 0 80": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.24 },
    { nombre: "Hierro 8 mm", unidad: "kg", cantidadPorUnidad: 2 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Capa aisladora terminada c/alisado": [
    { nombre: "Membrana asfáltica", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Emulsión asfáltica", unidad: "l", cantidadPorUnidad: 0.5 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.01 },
  ],
  "Encadenado inferior, armado y llenado": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.1 },
    { nombre: "Hierro 8 mm", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Encadenado superior, armado y llenado": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.08 },
    { nombre: "Hierro 8 mm", unidad: "kg", cantidadPorUnidad: 3 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Colocación de zócalo": [
    { nombre: "Zócalo", unidad: "ml", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo para cerámico", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  "Dinteles H° A°": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.05 },
    { nombre: "Hierro 6 mm", unidad: "kg", cantidadPorUnidad: 2 },
  ],
  "Dinteles de arco H. A": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.06 },
    { nombre: "Hierro 6 mm", unidad: "kg", cantidadPorUnidad: 3 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Vigas de calculo": [
    { nombre: "Hormigón H-17 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.15 },
    { nombre: "Hierro 12 mm", unidad: "kg", cantidadPorUnidad: 12 },
    { nombre: "Estribos 6 mm", unidad: "un", cantidadPorUnidad: 4 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.2 },
  ],
  "Cordón cuneta c/base sellada": [
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.12 },
    { nombre: "Hierro 6 mm", unidad: "kg", cantidadPorUnidad: 2 },
  ],
  "Mampostería de ladrillo común de 0,30 m": [
    { nombre: "Ladrillos comunes", unidad: "un", cantidadPorUnidad: 60 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 12 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.05 },
  ],
  "Mampostería de ladrillo de 0,20 m": [
    { nombre: "Ladrillos comunes", unidad: "un", cantidadPorUnidad: 50 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 10 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.04 },
  ],
  "Mampostería de bloque": [
    { nombre: "Bloques de hormigón", unidad: "un", cantidadPorUnidad: 12 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
  ],
  "Mampostería de ladrillo cerámico": [
    { nombre: "Ladrillos cerámicos", unidad: "un", cantidadPorUnidad: 30 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 6 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.02 },
  ],
  "Mampostería de ladrillón a la vista tomado de junta": [
    { nombre: "Ladrillones a la vista", unidad: "un", cantidadPorUnidad: 25 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
    { nombre: "Pega para junta", unidad: "kg", cantidadPorUnidad: 2 },
  ],
  "Mampostería de ladrillo de 0,15 a la vista tomado de junta": [
    { nombre: "Ladrillos a la vista", unidad: "un", cantidadPorUnidad: 35 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
  ],
  "Revoque Grueso": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 6 },
    { nombre: "Cal hidráulica", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
    { nombre: "Hidrófugo", unidad: "l", cantidadPorUnidad: 0.1 },
  ],
  "Revoque grueso y fino en pared": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Cal hidráulica", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.04 },
    { nombre: "Hidrófugo", unidad: "l", cantidadPorUnidad: 0.1 },
  ],
  "Revoque grueso y fino en cielorraso": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Cal hidráulica", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.04 },
  ],
  "Revoque fino": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 3 },
    { nombre: "Cal hidráulica", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Arena fina", unidad: "m3", cantidadPorUnidad: 0.02 },
  ],
  "Revoque texturado y salpicre": [
    { nombre: "Revestimiento texturado", unidad: "kg", cantidadPorUnidad: 1.5 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 2 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.01 },
  ],
  "Contrapiso de 7 cm. de espesor": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 12 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.08 },
    { nombre: "Piedra partida", unidad: "m3", cantidadPorUnidad: 0.05 },
  ],
  "Contrapiso alisado con pintura": [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 14 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.08 },
    { nombre: "Piedra partida", unidad: "m3", cantidadPorUnidad: 0.05 },
    { nombre: "Pintura al cemento", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  "Colocación de cerámicos en pisos y paredes": [
    { nombre: "Cerámicos", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Fragüe", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  "Colocación de pisos de mosaicos": [
    { nombre: "Mosaicos", unidad: "un", cantidadPorUnidad: 4 },
    { nombre: "Mezcla de asiento", unidad: "m3", cantidadPorUnidad: 0.02 },
  ],
  "Colocación de losetas y rectángulos": [
    { nombre: "Losetas", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Fragüe", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  "Colocación de azulejos": [
    { nombre: "Azulejos", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Fragüe", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  Carpeta: [
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
  ],
  "Colocación de tejas francesas y colonial": [
    { nombre: "Tejas francesas/colonial", unidad: "un", cantidadPorUnidad: 10 },
    { nombre: "Alfajías", unidad: "ml", cantidadPorUnidad: 1.5 },
    { nombre: "Mortero de sujeción", unidad: "m3", cantidadPorUnidad: 0.01 },
  ],
  "Colocación de tejas francesas y colonial sobre losa": [
    { nombre: "Tejas francesas/colonial", unidad: "un", cantidadPorUnidad: 10 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 3 },
    { nombre: "Mortero de sujeción", unidad: "m3", cantidadPorUnidad: 0.01 },
  ],
  "Losa cerámica, armado y llenado": [
    { nombre: "Ladrillos cerámicos portantes", unidad: "un", cantidadPorUnidad: 8 },
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.1 },
    { nombre: "Hierro 6 mm", unidad: "kg", cantidadPorUnidad: 2 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Losa de hormigón, armado y llenado de 0,10 m": [
    { nombre: "Hormigón H-17 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.1 },
    { nombre: "Hierro 8 mm", unidad: "kg", cantidadPorUnidad: 4 },
    { nombre: "Malla de acero", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.1 },
  ],
  "Cubierta de techo con tierra y alisado con mezcla": [
    { nombre: "Tierra seleccionada", unidad: "m3", cantidadPorUnidad: 0.05 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 3 },
    { nombre: "Mezcla para alisado", unidad: "m3", cantidadPorUnidad: 0.02 },
  ],
  "Cubierta de techo con mezcla y ladrillo terminada": [
    { nombre: "Ladrillos comunes", unidad: "un", cantidadPorUnidad: 10 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 6 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.04 },
  ],
  "Colocación de marcos de puertas y ventanas 1,50 x 2": [
    { nombre: "Marco de madera", unidad: "un", cantidadPorUnidad: 1 },
    { nombre: "Espuma de poliuretano", unidad: "l", cantidadPorUnidad: 0.3 },
    { nombre: "Fijaciones", unidad: "un", cantidadPorUnidad: 8 },
  ],
  "Columnas para infraestructuras de encuentro": [
    { nombre: "Hormigón H-17 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.2 },
    { nombre: "Hierro 10 mm", unidad: "kg", cantidadPorUnidad: 12 },
    { nombre: "Estribos 6 mm", unidad: "un", cantidadPorUnidad: 6 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.3 },
  ],
  "Columna de base": [
    { nombre: "Hormigón H-17 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.3 },
    { nombre: "Hierro 10 mm", unidad: "kg", cantidadPorUnidad: 15 },
    { nombre: "Alambre recocido", unidad: "kg", cantidadPorUnidad: 0.3 },
  ],
  "Colocación de piso de mármol con carpeta": [
    { nombre: "Mármol", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Carpeta de asiento", unidad: "m3", cantidadPorUnidad: 0.02 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 4 },
  ],
  "Relleno y compactación": [
    { nombre: "Tierra seleccionada", unidad: "m3", cantidadPorUnidad: 0.1 },
  ],
  Demolición: [
    { nombre: "Bolsas de residuos", unidad: "un", cantidadPorUnidad: 2 },
  ],
  "Pintura de látex": [
    { nombre: "Látex", unidad: "l", cantidadPorUnidad: 0.25 },
    { nombre: "Enduido", unidad: "kg", cantidadPorUnidad: 0.3 },
    { nombre: "Cinta de enmascarar", unidad: "ml", cantidadPorUnidad: 0.2 },
  ],
  "Pintura a la cal": [
    { nombre: "Cal", unidad: "kg", cantidadPorUnidad: 0.5 },
    { nombre: "Fijador", unidad: "l", cantidadPorUnidad: 0.05 },
  ],
  "Pintura esmalte sintético": [
    { nombre: "Esmalte sintético", unidad: "l", cantidadPorUnidad: 0.15 },
    { nombre: "Diluyente", unidad: "l", cantidadPorUnidad: 0.1 },
    { nombre: "Lija", unidad: "un", cantidadPorUnidad: 0.5 },
  ],
  "Pintura al barniz": [
    { nombre: "Barniz", unidad: "l", cantidadPorUnidad: 0.15 },
    { nombre: "Diluyente", unidad: "l", cantidadPorUnidad: 0.05 },
  ],
  "Colocación de Durlock terminado": [
    { nombre: "Placas de Durlock", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Perfil metálico", unidad: "ml", cantidadPorUnidad: 2.5 },
    { nombre: "Tornillos", unidad: "un", cantidadPorUnidad: 12 },
    { nombre: "Masilla + endurecedor", unidad: "kg", cantidadPorUnidad: 0.5 },
    { nombre: "Cinta de papel", unidad: "ml", cantidadPorUnidad: 0.5 },
  ],
  "Colocación Poste Olímpico c/Alambrado terminado": [
    { nombre: "Postes olímpicos", unidad: "un", cantidadPorUnidad: 0.5 },
    { nombre: "Alambre de púas", unidad: "ml", cantidadPorUnidad: 4 },
    { nombre: "Hormigón H-13 (elaborado)", unidad: "m3", cantidadPorUnidad: 0.03 },
  ],
  "Colocación membrana rollo": [
    { nombre: "Membrana asfáltica (rollo)", unidad: "un", cantidadPorUnidad: 1 },
    { nombre: "Emulsión asfáltica", unidad: "l", cantidadPorUnidad: 2 },
  ],
  "Colocación membrana líquida": [
    { nombre: "Membrana líquida", unidad: "l", cantidadPorUnidad: 1.5 },
  ],
  "Muro piedra vista terminado": [
    { nombre: "Piedra", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 8 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.03 },
  ],
  "Muro piedra encofrado": [
    { nombre: "Piedra", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 10 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.05 },
  ],
  "Colocacion Porcelanato": [
    { nombre: "Porcelanato", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Fragüe", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  "Pozo Negro- Cavado-Calzado-Terminado Estándar 3x2": [
    { nombre: "Ladrillos comunes", unidad: "un", cantidadPorUnidad: 80 },
    { nombre: "Cemento", unidad: "kg", cantidadPorUnidad: 40 },
    { nombre: "Arena", unidad: "m3", cantidadPorUnidad: 0.1 },
    { nombre: "Tapa de H° A°", unidad: "un", cantidadPorUnidad: 0.5 },
  ],
  "Colocación machimbre techo terminado": [
    { nombre: "Machimbre", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Clavos", unidad: "kg", cantidadPorUnidad: 0.2 },
    { nombre: "Membrana asfáltica", unidad: "m2", cantidadPorUnidad: 1 },
  ],
  "Revestimiento de Piedra": [
    { nombre: "Piedra", unidad: "m2", cantidadPorUnidad: 1 },
    { nombre: "Adhesivo", unidad: "kg", cantidadPorUnidad: 5 },
    { nombre: "Fragüe", unidad: "kg", cantidadPorUnidad: 0.5 },
  ],
  Enduido: [
    { nombre: "Enduido", unidad: "kg", cantidadPorUnidad: 0.6 },
    { nombre: "Lija", unidad: "un", cantidadPorUnidad: 0.3 },
  ],
};
