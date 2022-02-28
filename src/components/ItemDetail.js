import React from 'react';
import './ItemDetailStyles.css';
import ItemCount from './ItemCount';

function ItemDetail ({ producto }) {
    return (
        <><div className='container'>
            <div className='item-detail-box'>
            <div className='column-1'>
            <img src='https://www.brildor.com/media/catalog/product/cache/21d516047c3b0f7c4a4c397e20cf92ab/t/a/taza-termo-inoxidable-blanca-d1.jpg' alt="foto del producto"></img>
            </div>
            <div className='column-2'>
            <h1 className='title'>Titulo{producto.title}</h1>
            <p className='description'>Descripcion del producto</p>
            <p className='price'>$ {producto.price} ARS</p>
            <div className='item-count-container'><ItemCount initial={0}/></div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ItemDetail;