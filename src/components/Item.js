import React from 'react'; 


function Item ({id, title, price, pictureUrl}) {
    return (
        <div>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{price}</p>
            <img src={pictureUrl}></img>
        </div>
    )
}

export default Item;