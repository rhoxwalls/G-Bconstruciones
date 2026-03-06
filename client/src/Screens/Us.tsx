import us from '../assets/Us.png'
import ProjectsSection from '../components/Projects'
import {ProyectData} from '../assets/ProjectsData/Projects/obrasData'

export const Us = () => {
   return (
    <section
    id='us'
    className='relative h-[150vh] flex items-center justify-center bg-cover bg-center'
    style={{backgroundImage:`url(${us})`}}>
      <ProjectsSection projects={ProyectData}/>
    </section>
  )
}
