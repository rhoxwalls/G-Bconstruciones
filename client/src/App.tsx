import {HashRouter as Router, Route,Routes} from "react-router-dom";
import { Nav } from "./components/Nav";
import Header from "./Screens/Header";
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Nav />}>
          <Route index element={<Header />}/>
        </Route>
      </Routes>
      </Router>
        )
}

export default App
