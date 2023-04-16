import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    const { cartItems } = useContext(CartContext);

    // console.log(cartItems.length);

    return (
        <>
            <h4 className="text-end">
                <a href="/cart"><FontAwesomeIcon icon={faCartShopping} size="lg" style={{color:"rebeccapurple"}} /></a>
                {cartItems.length} items
            </h4>
        </>
    );
};

export default Cart;
