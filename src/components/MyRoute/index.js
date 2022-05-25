import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "../Nav";
import Home from "../Home";
import NotFound from '../NotFound';
import GetProduct from '../GetProduct';
import GuardarProducto from '../GuardarProducto'
import EditarProducto from '../EditarProducto'

function MyRoute() {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/listaproducto" element={<GetProduct/>} />
          <Route path="/guardarproducto" element={<GuardarProducto/>} />
          <Route path="/editarproducto" element={<EditarProducto/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoute;
