import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css'

function Footer() {
    return (
        <footer className="mt-5 bg-dark py-4">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-light text-md-left">
                        <h4>Company Name</h4>
                        <p>123 Main St.</p>
                        <p>Anytown, USA 12345</p>
                    </Col>
                    <Col md={4} className="text-center text-light">
                        <h4>Contact Us</h4>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@company.com</p>
                    </Col>
                    <Col md={4} className="text-center text-light text-md-right">
                        <h4>Follow Us</h4>
                        <a  href="/">Facebook</a>
                        <br/><br/>
                        <a  href="/">Twitter</a>
                        <br/><br/>
                        <a  href="/">Instagram</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
