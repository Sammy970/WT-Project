import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (item) => {
        // Check if item is already in cart
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            // // If item already exists, update the quantity
            // const updatedCartItems = cartItems.map((cartItem) => {
            //     if (cartItem.id === item.id) {
            //         return { ...cartItem, quantity: cartItem.quantity + 1 };
            //     }
            //     return cartItem;
            // });
            // setCartItems(updatedCartItems);
        } else {
            // If item does not exist, add it to the cart with quantity of 1
            setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
        }
    };

    // const addToCart = (item) => {
    //     setCartItems((prevCartItems) => [...prevCartItems, item]);
    // };

    const removeFromCart = (item) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((cartItem) => cartItem.id !== item.id)
        );
    };

    const getTotalCost = () => {
        let total = 0;
        for(let item of cartItems) {
            total += parseFloat(item.price);
        }
        return total.toFixed(2);
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalCost }}>
            {children}
        </CartContext.Provider>
    );
};
