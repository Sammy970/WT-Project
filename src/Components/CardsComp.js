import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';
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

      <div className="card">
        <img src={props.cardImg} alt={props.cardTitle} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardContent}</p>
          <p className="card-price">₹ {props.cardPrice}</p>
          <Badge bg="dark" >{props.cardCategory}</Badge> <br/> <br/>
          <Button onClick={()  => handleAddToCart()} className="btn btn-class">Add to cart</Button>
        </div>
      </div>

      {/* <Card >
        <Card.Img variant="top" src={props.cardImg} width="200" height="350" />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardContent}</Card.Text>
          <Card.Text>{props.cardPrice}</Card.Text>
          <Badge bg="success">{props.cardCategory}</Badge>
        </Card.Body>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </Card> */}
    </>
  );
}

export default CardsComp;