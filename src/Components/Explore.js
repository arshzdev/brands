import React from 'react'
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";

const Explore = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className='explore-more'>
            <Container>
                <div className='col text-center p-4'>
                    <div class="col" style={{ maxWidth: '50%', margin: '0 auto' }}>
                        <Image src={require('../assets/drop.png')} fluid width={50} className='mb-2'></Image>
                        <h5 className='fw-bold mb-2'>Wellness Insights<br />
                            for Sustained Vitality</h5>
                        <p className='mb-5'>Explore essential tips for maintaining holistic well-being. </p>
                    </div>
                    <div className='slider-container'>
                    <Slider {...settings}>
                    <div className='col-md-4'>
                        <Image src={require('../assets/explore1.png')} fluid width={'100%'} className='mb-4 me-2 w-100'></Image>
                        <p className='fw-bold text-secondary text-start'>5 Ways to Enhance Brain Function and Memory, Reducing Alzheimer's Risks</p>
                        <p className='text-dark text-start'>Alzheimer’s disease and dementia are linked to the abnormal deterioration of brain cells ...</p>
                    </div>
                    <div className='col-md-4'>
                        <Image src={require('../assets/explore2.png')} fluid width={'100%'} className='mb-4 me-2 w-100'></Image>
                        <p className='fw-bold text-secondary text-start'>5 Ways to Enhance Brain Function and Memory, Reducing Alzheimer's Risks</p>
                        <p className='text-dark text-start'>Alzheimer’s disease and dementia are linked to the abnormal deterioration of brain cells ...</p>
                    </div>
                    <div className='col-md-4'>
                        <Image src={require('../assets/explore3.png')} fluid width={'100%'} className='mb-4 me-2 w-100'></Image>
                        <p className='fw-bold text-secondary text-start'>5 Ways to Enhance Brain Function and Memory, Reducing Alzheimer's Risks</p>
                        <p className='text-dark text-start'>Alzheimer’s disease and dementia are linked to the abnormal deterioration of brain cells ...</p>
                    </div>
                    </Slider>
                    </div>
                    <div>
                        <p className='fw-bold'><span>SEE ALL<i className="bi bi-chevron-right ms-3 "></i></span></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Explore