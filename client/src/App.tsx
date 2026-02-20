import { Route,Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./Screens/Hero";
import { Proyects } from "./Screens/Proyects";
function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Hero />} />
        <Route path="/proyects" element={<Proyects />}/>
        </Route>
      </Routes>
  )
}

export default App
