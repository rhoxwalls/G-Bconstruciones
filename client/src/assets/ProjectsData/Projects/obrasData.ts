const allImages = import.meta.glob('./**/*.{jpeg,jpg,png,webp}',{
    eager:true,
    import:'default'
}) as Record<string, string>;


export interface GalleryItem {
  src: string;
  description: string;
}


export interface ProyectsA {
    id: string, 
    title: string,
    mainImage:string,
    gallery:GalleryItem[],
}


const getGalleryByFolder = (folderName: string): GalleryItem[] => {
  return Object.keys(allImages)
    .filter((path) =>{
        const normalizedPath = path.toLowerCase();
        return normalizedPath.includes(`/${folderName.toLowerCase()}/`);
    })
    .map((path) => {
        const fileName = path.split('/').pop()?.split('.')[0] || "Detalle de obra";
        const cleanDescription = fileName.replace(/-/g, ' ');
    
    return {
            src: allImages[path],
            description: cleanDescription.charAt(0).toUpperCase() + cleanDescription.slice(1)
        };
})
};

export const ProyectData: ProyectsA[] = [
        { 
          id: "obraA", 
          title: 'Obra Industrial A',
         ...(() => {
          const items = getGalleryByFolder('obraA');
          return {
              mainImage: items.length > 0 ? items[0].src : "",
              gallery: items
          };
      })()
        }
]