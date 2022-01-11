import React, { useState } from 'react'
import { generateID } from '../helpers/idGenerator';

export default function NewItem({ setProductos }) {

    const defaultInputs = {
        name: '',
        count: 1,
        price: 0
    };

    const [inputValue, setInputValue] = useState(defaultInputs);

    const handleInputNameChange = (e) => {
        let newInputValue = { ...inputValue };
        newInputValue.name = e.target.value;
        setInputValue(newInputValue);

    }
    const handleInputCountChange = (e) => {
        let newInputValue = { ...inputValue };
        newInputValue.count = parseInt(e.target.value);
        setInputValue(newInputValue);
    }
    const handleInputPriceChange = (e) => {
        let newInputValue = { ...inputValue };
        newInputValue.price = parseInt(e.target.value);
        setInputValue(newInputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!inputValue.name && inputValue.count < 1 && inputValue.price < 1) return;


        let id = generateID();
        setProductos(p => [{ ...inputValue, id: id }, ...p]);
        setInputValue(defaultInputs);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setInputValue(defaultInputs);
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
                        <input type="text" className="form-control" placeholder="Ingrese nombre del producto" value={inputValue.name} onChange={handleInputNameChange} required />
                    </div>

                    <div className="row">
                        <div className="form-group col-5">
                            <label>Cantidad</label>
                            <input type="number" className="form-control" placeholder="Ingrese cantidad del producto" value={inputValue.count} onChange={handleInputCountChange} required min={1} />
                        </div>
                        <div className="form-group col-7">
                            <label>Precio</label>
                            <input type="number" className="form-control" placeholder="Ingrese precio del producto" value={inputValue.price} onChange={handleInputPriceChange} required min={1} />
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
