import ProjectsSection from '../components/Projects';
import {ProyectData} from '../assets/ProjectsData/Projects/obrasData';



export const Portfolio = () => {
   return (
    <section>
      <ProjectsSection projects={ProyectData}/>
    </section>
  )
}
