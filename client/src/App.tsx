import { Route,Routes, HashRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import Header from "./Screens/Header";
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Header />} />
        </Route>
      </Routes>
      </HashRouter>
        )
}

export default App
