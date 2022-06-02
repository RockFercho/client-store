import React, { useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { URL_SERVER, URL_SERVER_LOGIN } from '../../global';

export default function Login() {

  const [usuario, setUsuario] =  useState('');
  const [password, setPassword] =  useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios
      .post(URL_SERVER + URL_SERVER_LOGIN, 
        {
          codigo: usuario,
          password
        })
      .then( (res) => {
        setUsuario('');
        setPassword('');
        localStorage.setItem('token', res.data)
        navigate('/');
        alert("Se conecto correctamente");
      })
      .catch(err => {
        alert("Error de credenciales");
        console.log('errr', err);
      })
      e.preventDefault();
  }

  return(
    <div>
      <div>
        <h1> LOGIN </h1>
      </div>
      <div>
        <form onSubmit={e => {handleSubmit(e)}}>
          <div>
            <label>
              USUARIO:
              <input type="text"
                    value={usuario} 
                    onChange={e => setUsuario(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              PASSWORD:
              <input type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="Aceptar" />`
        </form>
      </div>
    </div>
  );
}