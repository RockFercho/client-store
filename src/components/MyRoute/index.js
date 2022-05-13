import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "../Nav";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import NotFound from '../NotFound';
import GetProduct from '../GetProduct';
import GuardarProducto from '../GuardarProducto'

function MyRoute() {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/listaproducto" element={<GetProduct/>} />
          <Route path="/guardarproducto" element={<GuardarProducto/>} />
          <Route path="/contact/:country" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoute;
