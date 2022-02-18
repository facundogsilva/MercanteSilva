import React, {useState} from 'react';
import './ItemCountStyles.css';

function ItemCount ({stock, initial, onAdd}) {
    let [count, setCount] = useState(initial);
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

    return (
        <div className='card'>
                <div><button onClick={addItem}>+</button></div>
                <div className='counter-numbers'>    {count}    </div>
                <div><button onClick={rmvItem}>-</button></div>

            </div>
    )

};

export default ItemCount;
