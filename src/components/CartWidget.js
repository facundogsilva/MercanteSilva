import React from 'react';
import './CartWidgetStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCoffee, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />

function CartWidget(){
    return(
        <button>
            <FontAwesomeIcon className='cart-button' icon={faShoppingCart} size='xs'/>
        </button>
    )
}



export default CartWidget;