import {HashRouter as Router, Route,Routes} from "react-router-dom";
import { Nav } from "./components/Nav";
import Header from "./Screens/Header";
import DashboardCotizacion from "./components/DashboardCotizacion";
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Nav />}>
          <Route index element={<Header />}/>
          <Route path="*" element={<Header />} />
          <Route path="/cotidashboard" element={<DashboardCotizacion />} />
        </Route>
      </Routes>
      </Router>
        )
}

export default App
