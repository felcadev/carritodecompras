import React from 'react'
import { currencyFormat } from '../helpers/currencyHelper';

export default function Summary({total}) {

    return (
        <div className='text-center mt-2 mb-2'>
            <hr />
            <h2>Total : {currencyFormat(total)}</h2>
            <hr />
        </div>
    )
}
