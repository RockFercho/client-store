
import React, { useState} from 'react';
import axios from 'axios';
import { URL_SERVER, URL_SERVER_PRODUCTO } from '../../global';

export default function GetProduct() {

  const [nombre, setNombre] =  useState('');
  const [precio, setPrecio] =  useState(0);
  const [vencimiento, setVencimiento] =  useState('');

  const handleSubmit = (e) => {

    axios
      .post(URL_SERVER + URL_SERVER_PRODUCTO, 
        {
          nombre,
          precio: parseInt(precio),
          vencimiento
        })
      .then( (res) => {
        setNombre('');
        setPrecio(0);
        setVencimiento('');
        <p>Se guardo exitosamente</p>
      })
      .catch(err => {
        <p>Error al guardar</p>
        console.log('errr', err);
      })
      e.preventDefault();
  }

  return (
    <div>
      <div>
        <h1> GUARDAR PRODUCTO </h1>
      </div>
      <div>
        <form onSubmit={e => {handleSubmit(e)}}>
          <div>
            <label>
              NOMBRE:
              <input type="text"
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              PRECIO:
              <input type="text"
                    value={precio} 
                    onChange={e => setPrecio(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              VENCIMIENTO:
              <input type="text"
                    value={vencimiento} 
                    onChange={e => setVencimiento(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="Guardar" />`
        </form>
      </div>
    </div>
  );
}