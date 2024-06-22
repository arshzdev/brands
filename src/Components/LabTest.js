import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap';

const LabTest = () => {
    return (
        <Container>
            <div class="py-5">
                <div class="row align-items-center justify-content-evenly text-center">
                    <div class="col-sm">
                        <Image src={require('../assets/drop.png')} fluid width={50} className='mb-4'></Image>
                        <h5 className='fw-bold mb-4'>We aim to empower you to achieve positive health and good quality of life, through a scientific evidence-based, holistic approach.</h5>
                        <p>Our research unlocks the goodness of natural ingredients to supplement your health enrichment journey.</p>
                    </div>
                    <div class="col-sm">
                        <Image src={require('../assets/lapTest.png')} className="w-100"></Image>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LabTest