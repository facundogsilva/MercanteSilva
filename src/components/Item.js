import React from 'react'; 
import { Link } from 'react-router-dom';
import './ItemStyles.css';



function Item ({ id, title, price, pictureUrl}) {
    return (
        <div className='item-card' key={id}>
            <Link to={`/productos/${id}`} key={id} className='link'>
            <h1 className='item-id'></h1>
            <p className='item-title'> {title}</p>
            <p className='item-price'>$ {price} ARS</p>
            <img src={pictureUrl} className='item-pic'></img>
            </Link>
        </div>
    )   
}

export default Item;
