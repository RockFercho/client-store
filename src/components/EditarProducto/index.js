
import React, { useEffect, useState} from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { URL_SERVER, URL_SERVER_PRODUCTO } from '../../global';

function useQuery() {
  return new URLSearchParams( useLocation().search );
}


export default function GetProduct() {
  
  const [nombre, setNombre] =  useState('');
  const [precio, setPrecio] =  useState(0);
  const [id, setId] =  useState(0);
  const [vencimiento, setVencimiento] =  useState(null);
  
  let navigate = useNavigate();
  const query = useQuery();
  
  const getProductById = (idL) => {
    axios.get(URL_SERVER + URL_SERVER_PRODUCTO + `/${idL}`).then((res) => {
      const prod = res.data.body[0];
      setNombre(prod.nombre);
      setPrecio(prod.precio);
      setVencimiento(prod.vencimiento);
      setId(prod.id);
      console.log('get product ..', res.data.body)
    });
  }

  useEffect(() => {
    const id = query.get('id');
    console.log('******** product');
    console.log(id);
    getProductById(id);
  }, []);

  const handleSubmit = (e) => {
    axios
      .put(URL_SERVER + URL_SERVER_PRODUCTO + `/${id}`, 
        {
          nombre,
          precio: parseInt(precio),
          vencimiento
        })
      .then( (res) => {
        setNombre('');
        setPrecio(0);
        setVencimiento(null);
        alert("Se actualizo exitosamente");
        navigate('/listaproducto');
      })
      .catch(err => {
        alert("Error al Actualizar");
        console.log('errr', err);
      })
      e.preventDefault();
  }

  return (
    <div>
      <div>
        <h1> EDITAR PRODUCTO </h1>
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
          <input type="submit" value="Editar" />`
        </form>
      </div>
    </div>
  );
}