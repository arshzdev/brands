import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const BannerContent = () => {
    return (
        <Container className="position-relative container-fluid">
            <Image src={require('../assets/BannerFrame.png')} className="w-100" />
            {/* <div className="row-sm overlay-text">
                <div className='d-flex justify-content-start mb-5'>
                    <Nav.Link href="#discover" className='ms-2' style={{ color: 'dark', whiteSpace: 'nowrap' }}><span>Home<i className="bi bi-chevron-right ms-2 "></i></span></Nav.Link>
                    <Nav.Link href="#promotion" className='fw-bold mx-4' style={{ color: 'white', whiteSpace: 'nowrap' }}>Brand's Lab</Nav.Link>
                </div>
                <Image src={require('../assets/BannerLogo.png')} fluid className=" mt-5" />
                <h2>Backed by Science,</h2>
                <div className="vertical-line d-inline-block mx-1 mb-4"> </div>
                <p className="mb-3 fs-5 fs-md-4 fs-lg-3">Where Science Drives Wellness</p>
            </div> */}

            <div className="overlay-text">
                <div className='overlay-nav d-flex justify-content-start'>
                    <Nav.Link href="#discover" className='ms-2' style={{ color: 'dark', whiteSpace: 'nowrap' }}><span>Home<i className="bi bi-chevron-right ms-2 "></i></span></Nav.Link>
                    <Nav.Link href="#promotion" className='fw-bold mx-4' style={{ color: 'white', whiteSpace: 'nowrap' }}>Brand's Lab</Nav.Link>
                </div>
                <Image src={require('../assets/BannerLogo.png')} className='img-fluid' />
                <h2 className='mb-1'>Backed by Science,</h2>
                <div className="vertical-line d-inline-block mx-1 mb-1"> </div>
                <p className="mb-1 fs-5 fs-md-4 fs-lg-3">Where Science Drives Wellness</p>
            </div>
        </Container>
    )
}

export default BannerContent