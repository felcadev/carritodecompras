import React from 'react'

import Item from './Item'

export default function ListItems({productos, setProductos}) {

    const deleteProducto = (id) => {
        const newProductos = productos.filter(p => p.id !== id);
        setProductos([...newProductos]);
    }
    
    return (
        <div className="list-group">
            {productos.map(p => <Item key={p.id} id={p.id} name={p.name} count={p.count} price={p.price} deleteProducto={deleteProducto}/>)}
        </div>
    )
}
