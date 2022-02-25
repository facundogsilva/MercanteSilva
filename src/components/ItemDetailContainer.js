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
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    
    useEffect(() => {
        try {
          if (id) {
            async function fetchData() {
              const todosLosProductos = await getItem();
              const [id] = todosLosProductos.filter((elemento) => (id == elemento.id ? elemento : false));
              setProducto(id);
              setLoading(true);
            }
            fetchData();
          }
        } catch (error) {
          console.log(error);
        }
      }, [id]);
    
    return (
        <>
            {loading ? ( <h1 className='itemlistcontainer-text'>Cargando...</h1> ) : ( <ItemDetail item={producto}/> )}
        </>
    )
}

export default ItemDetailContainer;