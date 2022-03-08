import React, {useState} from 'react';
import './CartStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Cart() {
    const [display, setDisplay] = useState(false);


    return (
        <div className='cart-view-container'>
            <div className='cart-view'>
                { display ?
                    <div className='display-true'>TRUE</div>
                    :
                    <div className='display-false'>
                        <h1>Aún no hay items en el carrito! </h1> 
                        <div className='button-container'>
                        <button className='display-false-button'><Link to='/' className='link'>Agregar  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Link></button> 
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}



export default Cart;