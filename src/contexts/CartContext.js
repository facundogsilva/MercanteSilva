import { createContext, useContext, useState } from 'react';
import Cart from '../components/Cart';

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext);
}


export const CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [count, setCount] = useState(0);
    const [totalcount, setTotalCount] = useState(0);

const isInCart = (id) => cart.find(e => e.producto.id === id)

const addedItem = (producto, count) => {
    if (isInCart(producto.id)) {

    const updateCant = [...cart];

        updateCant.map(e => {
            if (e.producto.id === producto.id){
                e.count += count;
            }
        });
        
        setCart(updateCant);
        console.log(cart);
        
    } else {
        setCart([...cart, {producto, count}]);

    }

};

const delItem = (id) => {
    const newCart = [...cart].filter (p => {
        return p.producto.id != id
    })  
    setCart(newCart)
};

const clrCart = () => {
    setCart([]);
    setCount(0);
};

const cartTotalCount = () => {
    setTotalCount(cart.reduce((acum, item) => acum + item.price * item.count));
}

return(
    <CartContext.Provider value={{cart, count, addedItem, delItem, clrCart, cartTotalCount, totalcount}}>
        {children}
    </CartContext.Provider >
)

}

export { CartContext };
