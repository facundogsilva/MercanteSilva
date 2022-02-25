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
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    
    useEffect(() => {
              async function fetchData() {
                const todosLosProductos = await getItem();
                const [seleccion] = todosLosProductos.filter((elemento) => (elemento.id ? elemento : false));
                console.log(id);
                setProducto(seleccion);
                setLoading(false);
              }
              fetchData(); 
      }, [id]);
    
    return (
        <>
            {loading ? ( <h1 className='itemlistcontainer-text'>Cargando...</h1> ) : ( <ItemDetail item={producto}/> )}
        </>
    )
}

export default ItemDetailContainer;