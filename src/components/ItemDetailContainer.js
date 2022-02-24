import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from './productos';

const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

function ItemDetailContainer () {
    const [producto, setProductos] = useState();
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    useEffect (() => {
        console.log(id);
        console.log(productos);
        try {
            if (id) {
                getItem.then((res) => {
                    let resultado = res.filter((elemento) => {
                        let mostrarProducto;
                        if (id == elemento.id) {
                            mostrarProducto = elemento;
                        }
                        return mostrarProducto;
                    });
                    console.log(resultado);
                    setProductos(resultado);
                    setLoading(true);
                });
            }
            getItem.finally((res) => {
                setProductos(res);
                setLoading(false);
            });
        } catch (error) {
            console.log('error: ', error);
        }
    }, [id]);
    
    return (
        <>
            {loading ? ( <h1 className='itemlistcontainer-text'>Cargando...</h1> ) : ( <ItemDetail item={producto}/> )}
        </>
    )
}

export default ItemDetailContainer;