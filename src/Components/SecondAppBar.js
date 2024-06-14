import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SecondAppBar = () => {
    return (

        <Container>
            <Navbar className="d-flex" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='basic-navbar-nav'>
                    <Nav className='d-flex flex-row gap-4 mx-start'>
                        <Nav.Link href="#search" className='custome-nav-link fw-bold' style={{ color: 'black', whiteSpace: 'nowrap' }}><span>Products<i className="bi bi-chevron-down ms-2 "></i></span></Nav.Link>
                        <Nav.Link href="#faq" className='custome-nav-link fw-bold' style={{ color: 'black', whiteSpace: 'nowrap' }}><span>About Us<i className="bi bi-chevron-down ms-2 "></i></span></Nav.Link>
                        <Nav.Link href="#contactUs" className='custome-nav-link fw-bold active' style={{ color: 'black', whiteSpace: 'nowrap' }}>Brand's Lab</Nav.Link>
                        <Nav.Link href="#gifts" className='custome-nav-link fw-bold' style={{ color: 'black', whiteSpace: 'nowrap' }}>Gifts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </Container>
    )
}

export default SecondAppBar