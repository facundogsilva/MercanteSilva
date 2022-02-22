import React from 'react';

function ItemDetail ({descripcion, title, price, pictureUrl}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <p>{price}</p>
            <img src={pictureUrl} alt="foto del producto"></img>
        </>
    )
}


export default ItemDetail;