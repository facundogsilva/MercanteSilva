import React, {useState, useEffect} from 'react';
import './CartStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContextUse } from '../contexts/CartContext';

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const [cantCart, setCantCart] = useState(0);
    const {addedItem} = CartContextUse();
    const { delItem } = CartContextUse();
    const { clrCart } = CartContextUse();

    
const actualizarTotal = () => {
    let total = 0;

        if (addedItem.length > 0) {
                addedItem.map(e => {
                    total += e.count;
                    setCantCart(total);
                    setDisplay(true);
                });
        } else {
            setDisplay(false)
        }
}

useEffect(() => {

    actualizarTotal();
    
}, [addedItem]);

    return (
        <div className='cart-view-container'>
            <div className='cart-view'>
                { display ?
                    <div className='display-true'>
                        {cantCart}
                        <button onClick={delItem}>Eliminar item</button>
                        <button onClick={clrCart}>Limpiar carrito</button>
                    </div>
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