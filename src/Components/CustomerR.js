import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './CustomerR.css';

const CustomerR = () => {
    return (
        <section className="CustomerR">
            <Container>
                <Row className="pb-5">
                    <Col className="text-center">
                        <h2 className="section-title">Our Happy Customers</h2>
                        <p className="section-subtitle">The Passage Experienced A Surge In Popularity During The 1960s When Again During The 90s As Desktop Publishers</p>
                    </Col>
                </Row>
                <Row className="justify-content-center ">
                    <Col xl={8} md={10}>
                        <Carousel id="testimonial-slider" className="slide custo">
                            <Carousel.Item>
                                <div className="d-sm-flex row">
                                    <Col sm={5} className="profile-box">
                                        <img decoding="async" src="Images/testimonial-1.png" className="img-fluid" alt="1" />
                                    </Col>
                                    <Col sm={7} className="card">
                                        <div className="desc-box">
                                            <p className="fst-italic">Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products in the future from this author.</p>
                                            <div className="my-4">
                                                <h4>Samyak Jain</h4>
                                                <p className="m-0 text-white">Happy Customers</p>
                                            </div>
                                            <img decoding="async" src="Images/qoutes.png" className="float-end" alt="2" />
                                        </div>
                                    </Col>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-sm-flex row">
                                    <Col sm={5} className="profile-box">
                                        <img decoding="async" src="Images/testimonial-1.png" className="img-fluid" alt="3" />
                                    </Col>
                                    <Col sm={7} className="card">
                                        <div className="desc-box">
                                            <p className="fst-italic">Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products in the future from this author.</p>
                                            <div className="my-4">
                                                <h4>Jecob Oramson</h4>
                                                <p className="m-0 text-white">Happy Customers</p>
                                            </div>
                                            <img decoding="async" src="Images/qoutes.png" className="float-end" alt="4" />
                                        </div>
                                    </Col>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-sm-flex row">
                                    <Col sm={5} className="profile-box">
                                        <img decoding="async" src="Images/testimonial-1.png" className="img-fluid" alt="5" />
                                    </Col>
                                    <Col sm={7} className="card">
                                        <div className="desc-box">
                                            <p className="fst-italic">Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products in the future from this author.</p>
                                            <div className="my-4">
                                                <h4>Jecob Oramson</h4>
                                                <p className="m-0 text-white">Happy Customers</p>
                                            </div>
                                            <img decoding="async" src="Images/qoutes.png" className="float-end" alt="6" />
                                        </div>
                                    </Col>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CustomerR;