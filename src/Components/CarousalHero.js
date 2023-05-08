import { Carousel, Row, Col } from 'react-bootstrap';
import './CarouselHero.css'

const CarouselHero = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item className="banner" interval={3000}>
                    <Row>
                        <Col xs={12} md={6} lg={5}>
                            <Carousel.Caption className="carousel-caption">
                                <h1>100% Handmade</h1>
                                <h3>Best from Waste</h3>
                                <p>"Discover unique and handmade arts and crafts created by talented seniors and specially-abled individuals."</p>
                            </Carousel.Caption>
                        </Col>
                        <Col xs={12} md={6} lg={7} className="">
                            <img className="Image" src="Images/Hero2.png" alt="Second slide" width="750px" />
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item className="banner" interval={1000}>
                    <Row>
                        <Col xs={12} md={6} lg={5}>
                            <Carousel.Caption className="carousel-caption">
                                <h1>100% Creative Artwork</h1>
                                <h3>Unique Artwork made by creative minds</h3>
                                <p>“Painting is just another way of keeping a diary.”</p>
                            </Carousel.Caption>
                        </Col>
                        <Col xs={12} md={6} lg={7} className="">
                            <img className="Image" src="Images/Hero2.png" alt="Second slide" width="750px" />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CarouselHero;
