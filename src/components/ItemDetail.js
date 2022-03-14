import React, {useState}  from 'react';
import './ItemDetailStyles.css';
import ItemCount from './ItemCount';
import { CartContextUse } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';

function ItemDetail ({ producto, initial, stock }) {

    let [count, setCount] = useState(initial);
    const [mostrar, setMostrar] = useState(true);
    const { addedItem } = CartContextUse();

    const addItem = () => {
        if(count < stock){
            setCount(count+1);
        }
        else{
            alert("No queda suficiente stock :(")
        }
    };
    const rmvItem = () => {
        if(count > 0){
            setCount(count-1);
        }
    };

   function onAdd() {
        if(count > 0) {
        addedItem(producto, count);
        console.log('producto: ', producto, 'count: ', count)
        console.log(addedItem)
        setMostrar(false)
        } else {
            alert("Tenes que sumar al menos un item!")
        }
    }

    return (
        <><div className='container'>
            <div className='item-detail-box'>
            <div className='column-1'>
            <img src={producto.pictureUrl} alt="foto del producto" className='detail-img'></img>
            </div>
            <div className='column-2'>
            <h1 className='title'>{producto.title}</h1>
            <p className='description'>{producto.description}</p>
            <p className='price'>$ {producto.price} ARS</p>
            <div className='item-count-container'>
                <ItemCount mostrar={mostrar} addItem={addItem} rmvItem={rmvItem} onAdd={onAdd} count={count}/></div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ItemDetail;