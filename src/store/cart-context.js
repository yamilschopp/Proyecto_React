import React, { createContext, useState } from 'react';
export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    
    const clearCart = () => {
        setProductoCart([]);
    }

    const isInCart = (title) => {
        return productoCart.some((item) => item.item.title === title)
    }


    const onAdd = (producto, cantCart) => {
        if (isInCart(producto.title)) {
            const newCarrito = [...productoCart]
            for (const element of newCarrito) {
                if (element.item.title === producto.title) {
                    element.quality+=cantCart
                }
            }
            setProductoCart(newCarrito)

        } else {
           setProductoCart(
                [...productoCart, {"item": producto, "quality": cantCart}]
            ) 
            
           }
    }
    
    const deleteCart = (title) =>{
        const nuevoCart = productoCart.filter( i => i.item.title !== title);
        setProductoCart(nuevoCart);
    }

    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productoCart,
            onAdd: onAdd,
            clearCart: clearCart,
            deleteCart: deleteCart,
            isInCart: isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    clearCart: () => {},
    deleteCart: (id) => {},
    isInCart: (id) => {},
});

export default CartContext;