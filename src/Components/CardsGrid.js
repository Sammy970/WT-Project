import { React, useState } from "react";
import CardsComp from "./CardsComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import FilterForm from "./FilterForm";


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
            <Container>
                <FilterForm />
                <Row>
                    {datas.map((card) => (
                        <Col xs={6} md={3}  >
                            <CardsComp cardImg={card.image} cardTitle={card.title} cardContent={card.desc} cardPrice={card.price} cardCategory={card.select} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
};



export default CardsGrid;