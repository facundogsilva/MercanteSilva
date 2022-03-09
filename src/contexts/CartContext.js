import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext);
}


export const CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [count, setCount] = useState(0);

const isInCart = (id) => cart.find(e => e.producto.id === id)

const addedItem = (producto, cantidad) => {
    if (isInCart(producto.id)) {

    const updateCant = [...cart];

        updateCant.map(e => {
            if (e.producto.id === producto.id){
                e.count += cantidad;
            }
        });
        setCart(updateCant);
        console.log(cart);
        
    } else {
        setCart([...cart, {producto, cantidad}]);

    }

};

const delItem = (id) => {
    const cartFilter = cart.filter(e => e.producto.id !== id)
    setCart(cartFilter);
};

const clrCart = () => {
    setCart([]);
    setCount(0);
};


return(
    <CartContext.Provider value={{cart, count, addedItem, delItem, clrCart}}>
        {children}
    </CartContext.Provider >
)

}

export { CartContext };
