// import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Nav from "../Nav";
import Home from "../Home";
import NotFound from '../NotFound';
import GetProduct from '../GetProduct';
import GuardarProducto from '../GuardarProducto';
import EditarProducto from '../EditarProducto';
import Login from '../Login';
import { session } from '../../globalFuncionts';

function MyRoute() {
  
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/" exact element={session() ? <Home/> : <Navigate to = '/login'/>} />
          <Route path="/listaproducto" element={session() ? <GetProduct/> : <Navigate to = '/login'/>} />
          <Route path="/guardarproducto" element={session() ? <GuardarProducto/> : <Navigate to = '/login'/>} />
          <Route path="/editarproducto" element={session() ? <EditarProducto/> : <Navigate to = '/login'/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoute;
