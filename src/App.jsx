import React, { useEffect, useState } from 'react'
import ListItems from './components/ListItems';
import Modal from './components/Modal';
import NewItem from './components/NewItem';
import Summary from './components/Summary';
import { exportToCSV } from './helpers/exelHelper';


const KEY = 'productos';

const App = () => {

  const [productos, setProductos] = useState([]);

  const titleModal = '¿Esta seguro de eliminar toda la información?';
  const bodyModal = 'Recuerde que una vez que la información sea eliminada no podrá vizualizarla nunca más.';


  useEffect(() => {
    const storedProductos = JSON.parse(localStorage.getItem(KEY));
    if (storedProductos) {
      setProductos(storedProductos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(productos));
  }, [productos]);

  const handleCleanData = () => {
    setProductos([]);
  }

  const handleDownloadExcel = () => {
    if(productos.length < 1) return;
    let dataToExcel = productos.map( ({name, price, count}) => ({Nombre: name,Precio :  price, Cantidad: count, Total: count * price}));
    exportToCSV(dataToExcel, 'CarritoDeCompras');
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <NewItem setProductos={setProductos} />
        </div>
        <div className="card-body">
          <Summary productos={productos} />
          <hr />
        </div>
        <div className='card-body'>
          <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal">Limpiar data</button>
          <button className='btn btn-success' onClick={handleDownloadExcel}>Descargar excel</button>
          <h2>Listado de productos</h2>
          <ListItems productos={productos} setProductos={setProductos} />
        </div>
      </div>
      <Modal title={titleModal} bodyText={bodyModal} handleEvent={handleCleanData}/>
    </div>
  );
}

export default App;
