import React, {useState, useEffect} from 'react';
import './CartStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContextUse } from '../contexts/CartContext';
import { faTrashAlt, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import {collection, timeStamp, getDocs, doc, getDoc, Timestamp, addDoc } from 'firebase/firestore'
import {db} from '../utils/firebase'
import { async } from '@firebase/util';

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const [cantCart, setCantCart] = useState(0);
    const {addedItem, delItem, clrCart, cart, count, totalcount, cartTotalCount} = CartContextUse();

    
const actualizarTotal = () => {
    let total = 0;
    
        if (cart.length > 0) {
            console.log(cart)
            console.log(cartTotalCount)
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

const sendOrder = async(evt) => {
    evt.preventDefault();
    console.log(cart)
    let order = {
        buyer: {
            name: evt.target[1].value,
            phone: evt.target[2].value,
            email: evt.target[0].value,
        },
        items: {
            cart
        },
        total: cart.reduce((acc, i)=>(acc + (i.producto.price * i.count)),0)
    }
    order.date = Timestamp.fromDate(new Date());
    const queryCollection = collection(db, 'orders');
    console.log(order)
    try {
        const docRef = await addDoc(queryCollection, order)
        console.log('docRef:', docRef)
    } catch (error) {
        console.log('error: ', error)
    }

}

useEffect(() => {

    actualizarTotal();
    sendOrder();
    
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
                <div className='total-price'>Total compra: $ {cartTotalCount} ARS </div>
                <div className='cart-button-clear'><button onClick={clrCart} className='cart-button-clear'>Vaciar carrito</button></div>

                <form  className='input-holder' onSubmit={sendOrder}>
                    <label for="email">Email</label>
                    <input type="text" id="fname" name="fname" ></input>
                    <label for="name">Nombre</label>
                    <input type="text" id="lname" name="lname"></input>
                    <label for="pnumber">Número de teléfono</label>
                    <input type="text" id="lname" name="lname"></input><br></br>
                    <button className='buy-button' type='submit'>Comprar</button>
                </form>
                    
                </> 
                :
                ''
                }
                
            </div>
        </div>
    )
}



export default Cart;