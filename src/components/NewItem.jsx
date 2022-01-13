import React, { useState } from 'react'
import { generateID } from '../helpers/idGenerator';
import useForm from '../hooks/useForm';

export default function NewItem({ setProductos }) {

    const defaultInputs = {
        name: '',
        count: 1,
        price: 0
    };

    const [ inputValue, handleFormChange, handleResetForm ] = useForm(defaultInputs);
    const { name, count, price } = inputValue;


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.name && inputValue.count < 1 && inputValue.price < 1) return;

        let id = generateID();
        setProductos(p => [{ ...inputValue, id: id }, ...p]);
        handleResetForm();
    }

    const handleReset = (e) => {
        e.preventDefault();
        handleResetForm();
    }


    return (

        <div className="card">
            <div className="card-header">
                <h3>Producto</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" name='name' autoFocus={true} placeholder="Ingrese nombre del producto" value={name} onChange={handleFormChange} required />
                    </div>

                    <div className="row">
                        <div className="form-group col-5">
                            <label>Cantidad</label>
                            <input type="number" className="form-control" name='count' placeholder="Ingrese cantidad del producto" value={count} onChange={handleFormChange} required min={1} />
                        </div>
                        <div className="form-group col-7">
                            <label>Precio</label>
                            <input type="number" className="form-control" name='price' placeholder="Ingrese precio del producto" value={price} onChange={handleFormChange} required min={1} />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <button onClick={handleReset} className="btn btn-danger ml-2">Limpiar</button>
                    </div>

                </form>

            </div>

        </div>



    )
}
