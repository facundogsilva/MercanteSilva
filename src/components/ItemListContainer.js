import React, { useState, useEffect } from 'react'; 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import productos from './productos'
import './ItemListContainerStyles.css';

 const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category }  = useParams();

     let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 5000)
    })
    useEffect(() => {
        if (category) {
            promesa
            .then((res) => {
                let resultado = res.filter((elemento) => {
                    let mostrarProducto = '';
                    if (elemento.categoria === category) {
                        mostrarProducto = resultado;
                    }
                    return mostrarProducto;
                })
                setProducts(resultado);
            })
            .catch((error) => {
                console.log(error);
            })  
            .finally(() => {
                setLoading(false);
            }); 
        } else  {
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

        }
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
