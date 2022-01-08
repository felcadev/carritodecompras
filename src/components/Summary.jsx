import React, { useEffect, useState } from 'react'

export default function Summary({productos}) {

    const [total, setTotal] = useState(0);


    useEffect(() => {
        let sum = 0
        productos.forEach(p => sum += p.count * p.price);
        setTotal(sum);
    }, [productos])

    return (
        <>
            <h1 className="card-title text-center">Total : { total}</h1>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </>
    )
}
