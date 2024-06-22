import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Dropdown } from 'react-bootstrap';

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
                        <Nav.Link href="#search" className='fw-semibold' style={{ color: 'white' }}><span><i className="bi bi-search d-inline-block me-2"></i>Search</span></Nav.Link>
                        <Nav.Link href="#faq" className='fw-semibold' style={{ color: 'white' }}>FAQ</Nav.Link>
                        <Nav.Link href="#contactUs" className='fw-semibold' style={{ color: 'white' }}>Contact Us</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle as="a" href="#country" className='fw-semibold nav-link custom-dropdown-toggle' style={{ color: 'white' }}>
                                <span>
                                    <Image src={require('../assets/thailandFlag.png')} className='mx-2'></Image>
                                    Thailand
                                    <i className="bi bi-chevron-down ms-2 "></i></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">UAE</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">USA</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Saudi</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#link" className='fw-semibold bg-white rounded-pill d-inline-block' style={{ color: 'black', width: 'fit-content'}}><span className='p-2'><i className="bi bi-cart4 d-inline-block me-2"></i>SHOP ONLINE</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppBar