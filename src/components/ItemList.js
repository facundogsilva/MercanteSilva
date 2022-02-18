import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'; 
import Item from './Item';
import './ItemListStyles.css';



function ItemList ({products}) {

    return (
        <div className='item-list'>
        {products.map((product) => (
            <Item key={product.id} id={product.id} price={product.price} pictureUrl={product.pictureUrl} title={product.title} />
        ))}
            
        </div>
    )  
}

export default ItemList;