import React, { useEffect, useState } from 'react'
import ListItems from './components/ListItems';
import Modal from './components/Modal';
import NewItem from './components/NewItem';
import Summary from './components/Summary';
import { exportToCSV } from './helpers/excelHelper';


const KEY = 'productos';

const App = () => {

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
    let dataToExcel = productos.map(({ name, price, count }) => ({ Nombre: name, Precio: price, Cantidad: count, Total: count * price }));
    dataToExcel  = [...dataToExcel, { Cantidad: 'Total', Total: total}]
    exportToCSV(dataToExcel, 'CarritoDeCompras');
  }

  return (
    <div className='container mt-3'>
      <NewItem setProductos={setProductos} />

      <Summary total={total} />

      <div className='d-flex justify-content-around mb-4'>
        <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal">Eliminar Info</button>
        <button className='btn btn-success' onClick={handleDownloadExcel}>Descargar excel</button>
      </div>

      <ListItems productos={productos} setProductos={setProductos} />

      <Modal title={titleModal} bodyText={bodyModal} handleEvent={handleCleanData} />
    </div>
  );
}

export default App;
