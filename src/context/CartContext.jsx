import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevState => {
            const existing = prevState.find(item => item.id === product.id);

            if (existing) {
                return prevState.map(item => item.id === product.id ?
                    { ...item, qty: item.qty + 1 } : item);
            }

            return [...prevState, { ...product, qty: 1 }]
        })
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}