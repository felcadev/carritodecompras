import React, { useEffect, useState } from 'react'
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import Summary from './components/Summary';


const KEY = 'productos';

const App = () => {

  const [productos, setProductos] = useState([]);


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

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <NewItem setProductos={setProductos} />
        </div>
        <div className="card-body">
          <Summary productos={productos} />
        </div>
        <div className='card-body'>
          <button className='btn btn-danger' onClick={handleCleanData}>Limpiar data</button>
          <h2>Listado de productos</h2>
          <ListItems productos={productos} setProductos={setProductos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
