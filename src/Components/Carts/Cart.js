import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    const { cartItems } = useContext(CartContext);

    // console.log(cartItems.length);

    return (
        <>
            <h4>
                <a href="/cart"><FontAwesomeIcon icon={faCartShopping} size="lg" /></a>
                {cartItems.length} items are added
            </h4>
        </>
    );
};

export default Cart;
