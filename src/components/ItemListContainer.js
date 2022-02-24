import React, { useState, useEffect } from 'react'; 
import ItemList from './ItemList'
import productos from './productos'
import './ItemListContainerStyles.css';

 const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

     let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 5000)
    })
    useEffect(() => {
        promesa
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })  
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    return (
        <>
            {loading ? (
                <h1 className='itemlistcontainer-text'>Cargando...</h1>
            ) : (
                <>
                    <h1 className='itemlistcontainer-text'>Hola, {greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    )
    }

export default ItemListContainer;
