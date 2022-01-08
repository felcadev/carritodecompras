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
        let newInputValue = {...inputValue};
        newInputValue.name = e.target.value;
        setInputValue(newInputValue);

    }
    const handleInputCountChange = (e) => {
        let newInputValue = {...inputValue};
        newInputValue.count = e.target.value;
        setInputValue(newInputValue);
    }
    const handleInputPriceChange = (e) => {
        let newInputValue = {...inputValue};
        newInputValue.price = e.target.value;
        setInputValue(newInputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let id = generateID();

        setProductos(p => [{...inputValue, id: id}, ...p]);
        setInputValue(defaultInputs);
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Producto</h2>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Ingrese nombre del producto" value={inputValue.name} onChange={handleInputNameChange} />
            </div>
            <div className="form-group">
                <label>Cantidad</label>
                <input type="number" className="form-control" placeholder="Ingrese cantidad del producto" value={inputValue.count} onChange={handleInputCountChange} />
            </div>
            <div className="form-group">
                <label>Precio</label>
                <input type="number" className="form-control" placeholder="Ingrese precio del producto" value={inputValue.price} onChange={handleInputPriceChange} />
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    )
}
