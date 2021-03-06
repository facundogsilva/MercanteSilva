import React from 'react';
import './ItemCountStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function ItemCount ({stock, initial, itemsAdded, addItem, rmvItem, onAdd, mostrar, count}) {

    return (
        <div className='card'>
                
                    { {mostrar} ?
                    <>
                <div><button onClick={addItem} className='normal-button'>+</button></div>
                <div className='counter-numbers'>    {count}    </div>
                <div><button onClick={rmvItem} className='normal-button'>-</button></div>
                    </>
                : ""
                    }
                     
                 
                { mostrar ?
                <div><button onClick={onAdd}  className='cart-button'>Añadir <FontAwesomeIcon className='cart-button' icon={faShoppingCart} size='xs'/></button></div>
                :
                <>
                <Link to='/cart'><button className='cart-button-2'>Terminar mi compra <FontAwesomeIcon className='cart-button' icon={faCheck} size='xs'/></button></Link>
                <Link to='/'><button className='cart-button-3'>Volver al catálogo <FontAwesomeIcon className='cart-button' icon={faArrowLeft} size='xs'/></button></Link>
                </>
                }
            </div>
    )

};

export default ItemCount;
