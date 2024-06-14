import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap';

const LabStudies = () => {
    return (

        <div className='lab-study'>
            <Container className="p-5">
                    <h3 className="mb-4">BRAND’S Lab Studies</h3>
                    <div className='row'>
                        <div className='col mt-5'>
                            <h1 className='fw-bold'style={{ fontSize: '4rem' }}>24</h1>
                            <hr></hr>
                            <p className='fw-bold text-secondary'>Clinical Studies</p>

                            <h1 className='fw-bold mt-5'style={{ fontSize: '4rem' }}>24</h1>
                            <hr></hr>
                            <p className='fw-bold text-secondary'>Clinical Studies</p>
                        </div>
                        <div className='col mt-5'>
                            <h1 className='fw-bold'style={{ fontSize: '4rem' }}>35+</h1>
                            <hr></hr>
                            <p className='fw-bold text-secondary'>Clinical Studies</p>

                            <h1 className='fw-bold mt-5' style={{ fontSize: '4rem' }}>35+</h1>
                            <hr></hr>
                            <p className='fw-bold text-secondary'>Clinical Studies</p>
                        </div>
                        <div className='col-sm justify-content-center d-none d-sm-block'>
                            <Image src={require('../assets/lab1.png')} fluid className='w-100'></Image>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default LabStudies