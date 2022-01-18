import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ListItems from './components/ListItems';
import Modal from './components/Modal';
import NewItem from './components/NewItem';
import Summary from './components/Summary';
import { exportToCSV } from './helpers/excelHelper';


const KEY = 'productos';

const App = React.memo(() => {

  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);


  const titleModal = '¿Esta seguro de eliminar toda la información?';
  const bodyModal = 'Recuerde que una vez que la información sea eliminada no podrá vizualizarla nunca más.';


  useEffect(() => {
    const storedProductos = JSON.parse(localStorage.getItem(KEY));
    if (storedProductos) {
      setProductos(storedProductos);
    }
  }, []);

  useEffect(() => {
    let sum = 0
    productos.forEach(p => sum += p.count * p.price);
    setTotal(sum);
  }, [productos])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(productos));
  }, [productos]);

  const handleCleanData = () => {
    setProductos([]);
  }

  const handleDownloadExcel = () => {
    if (productos.length < 1) return;
    let dataToExcel = productos.map(({ name, price, count }) => ({ Nombre: name, Precio: parseInt(price), Cantidad: parseInt(count), Total: count * price }));
    dataToExcel = [...dataToExcel, { Cantidad: 'Total', Total: total }]
    exportToCSV(dataToExcel, 'CarritoDeCompras');
  }

  return (
    // <div className='container'>
    //   {/* <NewItem setProductos={setProductos} /> */}

    //   <Summary total={total} />
    //   <Divider />
    //   <ListItems productos={productos} setProductos={setProductos} handleExcel={handleDownloadExcel} handleCleanData={handleCleanData} />

    // </div>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 1,
      }}
    >
      <NewItem setProductos={setProductos} />
      <Divider />
      <Summary total={total} />
      <Divider />
      <ListItems productos={productos} setProductos={setProductos} handleExcel={handleDownloadExcel} handleCleanData={handleCleanData} />

    </Box>
  );
})

export default App;
