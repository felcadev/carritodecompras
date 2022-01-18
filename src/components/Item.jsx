import React from 'react'
import { currencyFormat } from '../helpers/currencyHelper';


const Item = React.memo(({ id, name, count, price, deleteProducto }) => {

    const handleDelete = () => {
        deleteProducto(id);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <div className='btn btn-primary btn-sm'>{count} x {currencyFormat(parseInt(price))} = {currencyFormat(price * count)}</div>
                <button className='btn btn-danger btn-sm ml-2' onClick={handleDelete}>X</button>
            </div>
        </li>
    )
})

export default Item;