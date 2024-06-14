import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Footer = () => {
    return (
        <Container>
            <div className='col-sm p-4'>
                <Image src={require('../assets/oneGold.png')} fluid width={'12%'}></Image>
                <Row>
                    <Col md={2} className="footer-column">
                        <Nav.Link href="#product" className='custome-nav-link-footer mt-5 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Product</Nav.Link>
                        <Nav.Link href="#aboutUs" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>About Us</Nav.Link>
                        <Nav.Link href="#brandsLab" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>BRAND'S Lab</Nav.Link>
                        <Nav.Link href="#gifts" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Gifts</Nav.Link>
                        <Nav.Link href="#promotions" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Promotions</Nav.Link>
                    </Col>
                    <Col md={2} className="footer-column">
                        <Nav.Link href="#onlineStors" className='custome-nav-link-footer mt-5 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Online Stores</Nav.Link>
                        <Nav.Link href="#faq" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>FAQ</Nav.Link>
                        <Nav.Link href="#contactUs" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Contact Us</Nav.Link>
                        <Nav.Link href="#shopOnline" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Shop Online</Nav.Link>
                    </Col>
                    <Col md={2} className="footer-column">
                        <Nav.Link href="#privacyPolicy" className='custome-nav-link-footer mt-5 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Privacy Policy</Nav.Link>
                        <Nav.Link href="#termsofUse" className='custome-nav-link-footer mt-3 flex-column align-items-start' style={{ color: '#333333', whiteSpace: 'nowrap' }}>Terms of Use</Nav.Link>
                    </Col>
                    <Col className="footer-column">
                        <h3 className='mt-5 fw-bold' style={{ color: '#9F8F36' }}>Stay ahead in your health journey</h3>
                        <p>Subscribe to our email list for the latest health news, new product releases, and promotions.</p>

                        <InputGroup className="mb-3 rounded-pill">
                            <Form.Control
                                placeholder="Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="rounded-pill"
                                style={{ backgroundColor: '#FCF9F3' }}
                            />
                            <Button
                                className="rounded-pill fw-bold"
                                variant="outline-secondary"
                                id="button-addon2"
                                style={{ backgroundColor: '#9F8F36', borderColor: '#9F8F36', color: 'white' }}>
                                SUBSCRIBE
                            </Button>
                        </InputGroup>

                        <div className='col'>
                            <i className="bi bi-facebook me-3"></i>
                            <i className="bi bi-instagram"></i>
                        </div>

                    </Col>
                </Row>


                <hr></hr>
                <p className='text-secondary'>© BRAND’S® World, All Rights Reserved</p>
                <div className="d-flex justify-content-end">
                    <Image src={require('../assets/message.png')} fluid width={'4%'}></Image>
                </div>

            </div>
        </Container>
    )
}

export default Footer