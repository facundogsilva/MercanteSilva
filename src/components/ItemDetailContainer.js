import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from './productos';

const getItem = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

function ItemDetailContainer () {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { id }  = useParams();

    useEffect(() => {
        try {
              async function fetchData() {
                const todosLosProductos = await getItem();
                console.log(todosLosProductos)
                const [seleccion] = todosLosProductos.filter(itemSeleccionado => itemSeleccionado.id === 11);
                console.log(id);
                console.log(seleccion);
                setProducto(seleccion);
                setLoading(false);
              }
              fetchData(); 
        } catch (error) {
            console.log('error: ', error);
        }
      }, [id]);
    
    return (
        <>
            {loading ? ( <h1 className='itemlistcontainer-text'>Cargando...</h1> ) : ( <ItemDetail producto={producto}/> )}
        </>
    )
}

export default ItemDetailContainer;