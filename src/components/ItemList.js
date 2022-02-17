import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'; 
import Item from './Item';


function ItemList ({products}) {

    return (
        <div>
        {products.map((product) => (
            <Item {...product} id={product.id} price={product.price} pictureUrl={product.pictureUrl} title={product.title} />
        ))}
        </div>
    )  
}

export default ItemList;