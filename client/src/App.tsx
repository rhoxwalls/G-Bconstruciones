import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import Header from "./Screens/Header";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Header />} />
        </Route>
      </Routes>
      </BrowserRouter>
        )
}

export default App
