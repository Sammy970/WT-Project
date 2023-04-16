import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Container } from "react-bootstrap";

import '../Carts/CartList.css'


const CartList = () => {

  const { cartItems, removeFromCart, getTotalCost } = useContext(CartContext);

  // const handleRemoveClick = (item) => {
  //   removeFromCart(item);
  // };

  return (
    <>
      <div className="body">
        <Container>
          <br /><br /><br /><br />

          <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="cart-border"></div>

            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} />
                      {item.title}
                    </td>
                    <td>₹ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="cart-remove"
                        onClick={() => removeFromCart(item)}
                      >
                        <FontAwesomeIcon icon={faTrash} size="2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <div>
                <p className="cart-total">Total: ₹ {getTotalCost()}</p>
                <button className="cart-checkout">Proceed to Checkout</button>
              </div>
            </div>

          </div>

          <br /><br />
        </Container>
      </div>
    </>
  )
}

export default CartList