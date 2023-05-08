import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './HomeAboutPage.css';


const HomeAboutPage = () => {
    return (
        <>
            <Container>
                <Row id="HomeAbout" className='home-row'>
                    <Col xs={12} md={6}>
                        <h2>Discover artisanal crafts by seniors & the specially-abled.</h2>
                        <p>"At our company, we're committed to empowering local artisans and
                            promoting sustainable creativity."</p>
                        <p>Our purpose is to offer exquisite and durable crafts that blend form and function. We
                            hold the conviction that art has the power to enrich daily life with beauty and
                            happiness, and we're committed to helping customers discover objects that stir their
                            creativity and wonder.</p>
                        <p>At our core, we believe in the power of art to connect people and bring beauty into the
                            world. We hope you'll join us on this journey and discover something truly special on
                            our website.</p>
                        <br />
                        <div>
                            <Button className='my-link' href='/#HomeAbout'>Read more..</Button>
                        </div>
                    </Col >
                    <Col xs={12} md={6} className='right-img'>
                        <img className='right-img-class' src="bg.jpg" alt="Example" width="500" height="500" />
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default HomeAboutPage;