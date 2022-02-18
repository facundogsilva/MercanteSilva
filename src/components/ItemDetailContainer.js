import React, { useState, useEffect } from 'react';
import productos2 from './items'
import ItemDetail from './ItemDetail';
import items from './items';

const getItems = () => {
    const [items, getItems] = useState([]);

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
    useEffect(() => {
        promesa
            .then((res) => {
                getItems(res);
            })
            .catch((error) => {
                console.log(error);
            })  
            .finally(() => {
                setLoading(false);
            });
    }, []);

function ItemDetailContainer () {
    return (
        <ItemDetail id={items.descripcion} price={items.price} pictureUrl={items.pictureUrl} title={items.title}/>
    );
}
}
export default ItemDetailContainer;