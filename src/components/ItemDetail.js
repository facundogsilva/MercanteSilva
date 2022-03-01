import React from 'react';
import './ItemDetailStyles.css';
import ItemCount from './ItemCount';

function ItemDetail ({ producto }) {
    return (
        <><div className='container'>
            <div className='item-detail-box'>
            <div className='column-1'>
            <img src={producto.pictureUrl} alt="foto del producto" className='detail-img'></img>
            </div>
            <div className='column-2'>
            <h1 className='title'>{producto.id}-{producto.title}</h1>
            <p className='description'>{producto.description}</p>
            <p className='price'>$ {producto.price} ARS</p>
            <div className='item-count-container'><ItemCount initial={0}/></div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ItemDetail;