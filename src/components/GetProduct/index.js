import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns'
import { URL_SERVER, URL_SERVER_PRODUCTO } from '../../global';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function GetProduct() {

  const [product, setProduct] =  useState([]);
  const [valueBuscar, setValueBuscar] =  useState();

  const handleSubmit = (e) => {
    axios
      .get(URL_SERVER + URL_SERVER_PRODUCTO, 
        { params: {
            nombre: valueBuscar 
          }
        })
      .then( (res) => {
        setProduct(res.data.body);
      })
      .catch(err => {
        console.log('errr', err);
      })
      e.preventDefault();
  }

  const getAllProduct = () => {
    axios.get(URL_SERVER + URL_SERVER_PRODUCTO).then((res) => {
      setProduct(res.data.body);
    });
  }

  const accionEliminar = (id) => {
    axios
      .delete(URL_SERVER + URL_SERVER_PRODUCTO + `/${id}`)
        .then((res) => {
          alert("Se elimino el producto");
          getAllProduct();
        })
        . catch( err => {
          alert("Error :" + err);
        })
  }

  const accionEditar = (row) => {
    console.log("****************************");
    console.log(row);
  }
  
  useEffect( () => {
    getAllProduct();
  }, []);


  return (
    <div>
      <div>
        <h1> LISTA DE PRODUCTOS </h1>
      </div>
      <div>
        <form onSubmit={e => {handleSubmit(e)}}>
          <label>
            Buscar:
            <input type="text"
                   value={valueBuscar} 
                   onChange={e => setValueBuscar(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">Vencimiento</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((row) => (
                <StyledTableRow key={row.nombre}>
                  <StyledTableCell component="th" scope="row">
                    {row.nombre}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.precio}</StyledTableCell>
                  <StyledTableCell align="right">{format(new Date(row.vencimiento), 'dd/MMM/yyyy')}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={(e) => accionEditar(row)}>Editar</button>
                    <button onClick={(e) => accionEliminar(row.id)}>Eliminar</button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
