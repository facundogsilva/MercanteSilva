import React from 'react'; 
import './ItemListContainerStyles.css';


function ItemListContainer({greeting}) {
    return (
        <div>
        <div className='itemlistcontainer-text'>Hola,{greeting}</div>
        </div>
        
        
    ) }
    
export default ItemListContainer;