import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import productos from './productos';

const ItemDetailContainer = () => {
    const [productos, getItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const ItemGetter = async () => {
        try {
            setTimeout(() => {
                productos.get()
                .then((doc) => {

                    if(!doc.exists){
                        console.log('No producto con ese id');
                        return
                    }

                    getItems({ id: productos.id, ...productos.data() });

                })
                .catch((error) => {
                    console.log('Error:', error);

                })
                .finally(() => {
                    setLoading(false);
                })

            }, 2000);

        } catch (error) {
            console.log('Error en la funcion:', error);
        }
    };
    useEffect(() => {
       ItemGetter();
    },[]);

    return (
        <>
            {loading ? (
                <h1 className='itemlistcontainer-text'>Cargando...</h1>
            ) : (

            <ItemDetail id={productos}/>
            )}
        </>
    )
}

export default ItemDetailContainer