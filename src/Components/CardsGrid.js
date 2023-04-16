import { React, useState } from "react";
import CardsComp from "./CardsComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import FilterForm from "./FilterForm";
import Cart from "./Carts/Cart";

import './CardsGrid.css'

const CardsGrid = () => {

    const [datas, setDatas] = useState([])

    fetch('https://wt-project-backend.onrender.com/api/getData', {
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
            <div className="body">
                <br /><br /><br /> <br />

                <Container>
                    <Cart />
                    <FilterForm />
                    <Row className="my-3">
                        {datas.map((card, index) => (
                            <Col xs={6} md={3} className="mb-3" key={index} >
                                <CardsComp cardId={card._id} cardImg={card.image} cardTitle={card.title} cardContent={card.desc} cardPrice={card.price} cardCategory={card.select} />
                                <br /><br />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};



export default CardsGrid;