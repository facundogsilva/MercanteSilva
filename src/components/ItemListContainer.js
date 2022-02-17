import React, { useState, useEffect } from 'react'; 
import ItemList from './ItemList'
import productos from './productos'
import './ItemListContainerStyles.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        productos
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
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h1>Hola, {greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
    }

export default ItemListContainer;
