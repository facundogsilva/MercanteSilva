import React, {useState} from 'react';
import './ItemCountStyles.css';

function ItemCount ({stock, initial, onAdd}) {
    let [count, setCount] = useState(initial);
    const addItem = () => {
        if(count <= stock){
            setCount(count++);
        }
        else{
            alert("No queda suficiente stock :(")
        }
    };
    const rmvItem = () => {
        if(count > 0){
            setCount(count--);
        }
    };

    return (
        <div className='card'>
            <div className='item-title'>Remera "Mercante"</div>
                <div>
                <button onClick={addItem}>+</button>
                <div className='item-count-number'>{count}</div>
                <button onClick={rmvItem}>-</button>
                </div>
            <div></div>
            <button className='cart-add-button'>Agregar al carrito</button>
            </div>
    )

};

export default ItemCount;
