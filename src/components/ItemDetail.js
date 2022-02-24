import React from 'react';
import './ItemDetailStyles.css';

function ItemDetail ({descripcion, title, price, pictureUrl}) {
    return (
        <>
            <div className='item-detail-box'>
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <p>{price}</p>
            <img src={pictureUrl} alt="foto del producto"></img>
            </div>
        </>
    )
}

export default ItemDetail;