import { React, useState } from "react";
import CardsComp from "./CardsComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import FilterForm from "./FilterForm";
import Cart from "./Carts/Cart";


const CardsGrid = () => {

    const [datas, setDatas] = useState([])

    fetch('http://localhost:5000/api/getData', {
        method: 'POST',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        setDatas(data)
    })


    return (
        <>
            <br /><br /><br /> <br />


            <Container>
                <Cart />
                <FilterForm />
                <Row>
                    {datas.map((card, index) => (
                        <Col xs={6} md={3} key={index} >
                            <CardsComp cardId={card._id} cardImg={card.image} cardTitle={card.title} cardContent={card.desc} cardPrice={card.price} cardCategory={card.select} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br /><br /><br />

        </>
    );
};



export default CardsGrid;