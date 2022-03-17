import React, {useState, useEffect} from 'react';
import './CartStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContextUse } from '../contexts/CartContext';
import { faTrashAlt, faDotCircle } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const [cantCart, setCantCart] = useState(0);
    const {addedItem, delItem, clrCart, cart, count, totalcount} = CartContextUse();

    
const actualizarTotal = () => {
    let total = 0;
    
        if (cart.length > 0) {
            console.log(cart)
            console.log(cart[0].producto.title)
                cart.map(e => {
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
    
}, [cart]);



    return (
        <div className='cart-view-container'>
            <div className='cart-view'>
                { display ?
                cart.map((e) => {
                    return (
                    <>
                    <div className='display-true'>
                        <div className='cart-grid-container'>
                        <div className='grid-image'><img className='grid-image-props' src={e.producto.pictureUrl}></img></div>
                         <div className='grid-product'><FontAwesomeIcon className='cart-button-2' icon={faDotCircle} size='xs'/>  {e.producto.title} </div>
                         <div className='grid-units'>{e.count} unidades </div>
                         <div className='grid-price'>  $ {e.producto.price * e.count} ARS</div>
                        <div className='grid-delete-button'><button  onClick={() => delItem(e.producto.id, e.count)} className='cart-buttons'><FontAwesomeIcon className='cart-button-icon' icon={faTrashAlt} size='xs'/></button></div>
                        </div>  
                    </div>
                    
                    </>
                    )
                    }
                    )
                    :
                    <div className='display-false'>
                        <h1>¡Aún no hay items en el carrito! </h1> 
                        <div className='button-container'>
                        <button className='display-false-button'><Link to='/' className='link'>Agregar  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Link></button> 
                        </div>
                    </div>
                }
                {display ? 
                <>
                <div className='total-price'>Total compra: $ {totalcount} ARS </div>
                <div className='cart-button-clear'><button onClick={clrCart} className='cart-button-clear'>Vaciar carrito</button></div>
                </> 
                :
                ''
                }
                
            </div>
        </div>
    )
}



export default Cart;