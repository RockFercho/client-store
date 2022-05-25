import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">Home</Link> | 
      <Link to="/listaproducto">Lista Producto</Link> |
      <Link to="/guardarproducto">Guardar Producto</Link>
    </>
  );
}

export default Nav;
