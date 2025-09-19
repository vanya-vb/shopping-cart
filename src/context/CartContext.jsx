import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedItems = localStorage.getItem('cart');

        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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

    const removeFromCart = (id) => {
        setCart(prevState => prevState.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}