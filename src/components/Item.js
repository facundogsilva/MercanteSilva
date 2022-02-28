import React from 'react'; 
import { Link } from 'react-router-dom';
import './ItemStyles.css';
import ItemCount from './ItemCount';


function Item ({id, title, price, pictureUrl}) {
    return (
        <div className='item-card'>
            <h1 className='item-id'>{id}</h1>
            <Link to={'/productos/${item.id}'} key={id} className='link'><p className='item-title'>{id} - {title}</p>
            <p className='item-price'>$ {price} ARS</p>
            <img src={pictureUrl} className='item-pic'></img>
            <ItemCount initial={0} stock={5}/>
            </Link> 
        </div>
    )   
}

export default Item;