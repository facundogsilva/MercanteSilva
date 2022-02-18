import React from 'react'; 
import './ItemStyles.css';


function Item ({id, title, price, pictureUrl}) {
    return (
        <div className='item-card'>
            <h1 className='item-id'>{id}</h1>
            <p className='item-title'>{title}</p>
            <p className='item-price'>$ {price} ARS</p>
            <img src={pictureUrl} className='item-pic'></img>
        </div>
    )   
}

export default Item;