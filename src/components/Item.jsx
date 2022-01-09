import React from 'react'
import { currencyFormat } from '../helpers/currencyHelper';

export default function Item({ id, name, count, price, deleteProducto }) {

    const handleDelete = () => {
        deleteProducto(id);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <span className="badge badge-primary badge-pill">{count} x {currencyFormat(parseInt(price))} = {currencyFormat(price * count)}</span>
                <button className='badge badge-danger' onClick={handleDelete}>X</button>
            </div>
        </li>
    )
}
