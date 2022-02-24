import React from 'react'; 
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './ItemStyles.css';
import ItemCount from './ItemCount';


function Item ({id, title, price, pictureUrl}) {
    return (
        <Link path='/product/${product.id}'>
        <div className='item-card'>
            <h1 className='item-id'>{id}</h1>
            <p className='item-title'>{id} - {title}</p>
            <p className='item-price'>$ {price} ARS</p>
            <img src={pictureUrl} className='item-pic'></img>
            <ItemCount initial={0} stock={5}/>
        </div>
        </Link>
    )   
}

export default Item;