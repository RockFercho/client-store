import {
  Link
} from "react-router-dom";

function Nav() {

  function remove () {
    localStorage.removeItem('token');
  }
  return (
    <>
      <Link to="/">Home</Link> | 
      <Link to="/listaproducto">Lista Producto</Link><Link to="/guardarproducto">Guardar Producto</Link> |
      <Link to="/guardarproducto">Guardar Producto</Link> |
      <Link to="/login"  onClick={() => remove()}>Cerrar Sesion</Link>
    </>
  );
}

export default Nav;
