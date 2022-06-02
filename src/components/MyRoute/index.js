import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

import Nav from "../Nav";
import Home from "../Home";
import NotFound from '../NotFound';
import GetProduct from '../GetProduct';
import GuardarProducto from '../GuardarProducto';
import EditarProducto from '../EditarProducto';
import Login from '../Login'

function MyRoute() {

  const [session, setSession] = useState(false);

  console.log('token***', localStorage.getItem('token'));
  console.log('path ***', window.location.pathname)
  if (localStorage.getItem('token') === null && !session && window.location.pathname!=='/login') {
    console.log('9999999999999999');
    setSession(true);
    window.location = '/login'
  }
  
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/login" exact element={<Login/>} />
          { localStorage.getItem('token') !== null &&
            <Route path="/" exact element={<Home/>} />
          }
          <Route path="/listaproducto" element={<GetProduct/>} />
          <Route path="/guardarproducto" element={<GuardarProducto/>} />
          <Route path="/editarproducto" element={<EditarProducto/>} />
          <Route path="*" element={<NotFound/>} />
          <Redirect strict from = '/*' to = '/login' />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoute;
