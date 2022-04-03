import { createContext, useContext, useState } from 'react';



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
    const newCart = cart.filter((e) => e.producto.id !== id)  
    setCart(newCart)
};

const clrCart = () => {
    setCart([]);
    setCount(0);
};

const cartTotalCount = cart.reduce((acc, i)=>(acc + (i.producto.price * i.count)),0);

const cartWidgetCount = cart.reduce((acc, i)=>(acc + (i.producto.id = 1)),0);


return(
    <CartContext.Provider value={{cart, count, addedItem, delItem, clrCart, cartTotalCount, totalcount, cartWidgetCount}}>
        {children}
    </CartContext.Provider >
)

}

export { CartContext };
