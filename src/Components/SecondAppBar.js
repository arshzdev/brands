import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SecondAppBar = () => {
    return (

        <Container >
            <Navbar className="d-flex position-relative banner-container" expand="lg">
                    <Nav className='d-flex flex-row gap-4 mx-start'>
                        <Nav.Link href="#search" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}><span>Products<i className="bi bi-chevron-down ms-2 "></i></span></Nav.Link>
                        <Nav.Link href="#faq" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}><span>About Us<i className="bi bi-chevron-down ms-2 "></i></span></Nav.Link>
                        <Nav.Link href="#contactUs" className='custome-nav-link fw-semibold active' style={{ color: 'black', whiteSpace: 'nowrap' }}>Brand's Lab</Nav.Link>
                        <Nav.Link href="#gifts" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}>Gifts</Nav.Link>
                        <Nav.Link href="#discovery" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}>Discover Wellness</Nav.Link>
                        <Nav.Link href="#promotions" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}>Promotions</Nav.Link>
                        <Nav.Link href="#buy" className='custome-nav-link fw-semibold' style={{ color: 'black', whiteSpace: 'nowrap' }}>Where to Buy</Nav.Link>
                    </Nav>
            </Navbar>

        </Container>
    )
}

export default SecondAppBar