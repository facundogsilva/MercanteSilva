import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../utils/firebase';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

function ItemDetailContainer () {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { id }  = useParams();

    const getSelected = async () => {
        try {
          const document = doc(db, "items", id);
          const response = await getDoc(document);
          setProducto({ id: response.id, ...response.data() });
          console.log(producto.id);
        } catch (error) {
          console.log("error", error);
        } finally {
            setLoading(false);
        }
      };
    
      useEffect(() => {
        getSelected();
      }, [id]);

    
    return (
        <>
            {loading ? ( <h1 className='itemlistcontainer-text'>Cargando...</h1> ) : ( <ItemDetail producto={producto} initial={0} stock={1000}/> )}
        </>
    )
}

export default ItemDetailContainer;