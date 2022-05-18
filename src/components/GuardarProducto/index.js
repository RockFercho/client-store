
import React, { useState} from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { URL_SERVER, URL_SERVER_PRODUCTO } from '../../global';

export default function GetProduct() {

  const [nombre, setNombre] =  useState('');
  const [precio, setPrecio] =  useState(0);
  const [vencimiento, setVencimiento] =  useState(null);

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
        setVencimiento(null);
        alert("Se guardo exitosamente");
      })
      .catch(err => {
        alert("Error al guardar");
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={vencimiento}
                  onChange={(newValue) => {
                    setVencimiento(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </label>
          </div>
          <input type="submit" value="Guardar" />`
        </form>
      </div>
    </div>
  );
}