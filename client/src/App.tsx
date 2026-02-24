import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./Screens/Hero";
import { Proyects } from "./Screens/Proyects";
import Header from "./Screens/Header";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Header />} />
        <Route path="/proyects" element={<Proyects />}/>
        </Route>
      </Routes>
      </BrowserRouter>
        )
}

export default App
