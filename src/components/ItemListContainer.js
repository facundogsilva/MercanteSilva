import React, { useState, useEffect } from 'react'; 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import './ItemListContainerStyles.css';

 const ItemListContainer =  ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category }  = useParams();

    const getData = async () => {
        try {
          const itemCollection = collection(db, "items");
          const col = await getDocs(itemCollection);
          const dataItems = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
          console.log(dataItems)
          setProducts(dataItems);
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      const getQuery = async () => {
        try {
          const consulta = query(collection(db, "items"), where("categoryId", "==", category));
          const QuerySnapshot = await getDocs(consulta);
          setProducts(QuerySnapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })));
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      useEffect(() => {
        category ? getQuery() : getData();
      }, [category]);


    return (
        <>
            {loading ? (
                <h1 className='itemlistcontainer-text'>Cargando...</h1>
            ) : (
                <>
                    <h1 className='itemlistcontainer-text'>{greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    )
    }

export default ItemListContainer;
