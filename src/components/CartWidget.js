import React from 'react';
import './CartWidgetStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContextUse } from '../contexts/CartContext';

const element = <FontAwesomeIcon icon={faShoppingCart} />

function CartWidget(){
    const {totalcount} = CartContextUse();
    return(
        <>
        <button>
            <FontAwesomeIcon className='cart-button' icon={faShoppingCart} size='xs'/><div className='totalcount'>{totalcount}</div>
        </button>
        
        </>
    )
}



export default CartWidget;