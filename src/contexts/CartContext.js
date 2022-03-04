import { createContext, useContext, useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart ] = useState([]);
    const [count, setCount] = useState(0);

    const addItem = (producto, cantidad) => {
        console.log(count);
    }

    const rmvItem = (producto, cantidad) => {
        console.log(count);
    }

    const clear = () => {
        console.log(count);
    }

return(
    <CartContext.Provider value={{items, addItem, rmvItem, onAdd, count, count, itemsAdded, clear}}>
        {children}
    </CartContext.Provider>
)

}

export { CartContext };
export { useCartContext };
export { CartProvider };