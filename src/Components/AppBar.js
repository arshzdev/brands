import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

const AppBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={require('../assets/one.png')} className='w-100'></Image>
                </Navbar.Brand>
                <div className="toggle-icon mb-0 ">

                    <i className="bi bi-search me-5" style={{ color: 'white', fontSize: '25px' }}></i>

                    <i className="bi bi-cart4 me-5" style={{ color: 'white', fontSize: '25px' }}></i>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className='ms-auto d-flex flex-column flex-lg-row gap-4'>
                        <Nav.Link href="#search" className='fw-bold' style={{ color: 'white' }}><span><i className="bi bi-search d-inline-block me-2"></i>Search</span></Nav.Link>
                        <Nav.Link href="#faq" className='fw-bold' style={{ color: 'white' }}>FAQ</Nav.Link>
                        <Nav.Link href="#contactUs" className='fw-bold' style={{ color: 'white' }}>Contact Us</Nav.Link>
                        <NavDropdown title="Thailand" id="basic-nav-dropdown" className='fw-bold custom-nav-dropdown'>
                            <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">UAE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Singapore</NavDropdown.Item><NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Saudi</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link" className='fw-bold bg-white rounded-pill d-inline-block' style={{ color: 'black', width: 'fit-content' }}><span><i className="bi bi-cart4 d-inline-block me-2"></i>SHOP ONLINE</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppBar