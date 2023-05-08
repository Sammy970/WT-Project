import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css'

function Footer() {
    return (
        <footer className="mt-5 bg-dark py-4">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-light text-md-left">
                        <h4>RTist</h4>
                        <p>VIT, Pune</p>
                        <p>India, 400137</p>
                    </Col>
                    <Col md={4} className="text-center text-light">
                        <h4>Contact Us</h4>
                        <p>Phone: (+91) 8843235636</p>
                        <p>Email: info@rtist.com</p>
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
