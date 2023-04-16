import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge } from 'react-bootstrap';
import { CartContext } from './Carts/CartContext';


function CardsComp(props) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // console.log(props.cardId)
    const item = {
      id: props.cardId,
      title: props.cardTitle,
      image: props.cardImg,
      price: props.cardPrice
    };
    addToCart(item);
  };

  return (
    <>
      <Card >
        <Card.Img variant="top" src={props.cardImg} width="200" height="350" />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardContent}</Card.Text>
          <Card.Text>{props.cardPrice}</Card.Text>
          <Badge bg="success">{props.cardCategory}</Badge>
        </Card.Body>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </Card>
    </>
  );
}

export default CardsComp;