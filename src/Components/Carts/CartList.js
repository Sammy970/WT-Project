import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Container, Button } from "react-bootstrap";


const CartList = () => {

  const { cartItems, removeFromCart, getTotalCost } = useContext(CartContext);

  // const handleRemoveClick = (item) => {
  //   removeFromCart(item);
  // };

  return (
    <>
      <Container>
        <h1>Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title} - {item.price} - <FontAwesomeIcon onClick={() => removeFromCart(item)} icon={faTrash} />
              </p>
            </li>
          ))}
        </ul>

        <p>Total cost: {getTotalCost()}</p>

        <Button className="btn btn-success">Buy</Button>

        <ul>
          <p>Items to buy (ID of items)</p>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.id}</p>
            </li>
          ))}
        </ul>

      </Container>
    </>
  )
}

export default CartList