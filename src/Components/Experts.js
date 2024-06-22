import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Experts = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: (
            <div className="next-slick-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" className="" stroke="currentColor" fill="green" strokeWidth="2" viewBox="0 0 16 16" width="30" >
                        <path fillRule="evenodd" d="M7.354 4.354a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.708L11.293 8 7.354 4.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                {/* <Image src={require('../assets/RightArrow.png')} className=''></Image> */}
            </div>
        ),

        prevArrow: (
            <div className="next-slick-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" className="" stroke="currentColor" fill="green" strokeWidth="2" viewBox="0 0 16 16" width="30">
                    <path fillRule="evenodd" d="M8.646 11.646a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L5.707 8l2.646 2.646a.5.5 0 0 1 0 .708z" />
                </svg>

                {/* <Image src={require('../assets/LeftArrow.png')} className=''></Image> */}

            </div>
        ),
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

        <div className='text-center'>
            <Container>
                <div>
                    <h3 className='mt-5'>Hear from Our Experts</h3>
                    {/* <Image src={require('../assets/expertsBanner.png')} className=" mt-5 w-100"></Image> */}
                    <div className="ratio ratio-16x9 mt-5">
                        <iframe src="https://www.youtube.com/embed/AbYiNR9Qgm8?si=hZo7MWeY_eJY2lD4" title="YouTube video" allowfullscreen></iframe>
                    </div>
                    <p className='pb-5 mt-5' style={{ maxWidth: '60%', margin: '0 auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                </div>
                <div style={{ maxWidth: '50%', margin: '0 auto' }}>
                    <Image src={require('../assets/drop.png')} fluid width={50} className='mb-4'></Image>
                    <h5 className='fw-bold mb-4'>Your Natural Harmony:<br />
                        Substances in Tune with Your Body</h5>
                    <p>Our Scientists have uncovered how active compounds within BRAND’S® products work to positively impact mental and physical performance. </p>
                </div>

            </Container>

            {/* slider */}

            <div className="mb-5 p-5">
                <Slider {...settings}>
                    <div className='custom-carousel rounded'>
                        <h1 className='text-start p-4'>Carnosine</h1>
                        <img className='d-block w-100' src={require('../assets/slide1.png')} alt='First Slide' />
                        <div className='card-body'>
                            <p className='text-dark text-start mb-2 p-4'>Carnosine, a natural dipeptide in muscle
                                and brain tissues, buffers acidic compounds, reducing fatigue and enhancing performance. As an antioxidant, it protects cells from oxidative stress and may slow aging.</p>
                            <h5 className='text-dark text-start mb-3 p-4'><span>Read Studies<i className="bi bi-chevron-right ms-2 "></i></span></h5>
                        </div>
                    </div>
                    <div className='custom-carousel rounded'>
                        <h1 className='text-start p-4'>NANA</h1>
                        <img className='d-block w-100' src={require('../assets/slide2.png')} alt='Second Slide' />
                        <div className='card-body'>
                            <p className='text-dark text-start mb-2 p-4'>N-acetylneuraminic acid (NANA),
                                vital for brain function and immune defense, facilitates cell communication and helps neurons transmit signals. It aids immune system identification of pathogens, boosting defense.</p>
                            <h5 className='text-dark text-start mb-3 p-4'><span>Read Studies<i className="bi bi-chevron-right ms-2 "></i></span></h5>
                        </div>
                    </div>
                    <div className='custom-carousel rounded'>
                        <h1 className='text-start p-4'>Lutein</h1>
                        <img className='d-block w-100' src={require('../assets/slide3.png')} alt='Third Slide' />
                        <div className='card-body'>
                            <p className='text-dark text-start mb-2 p-4'>Lutein, a key carotenoid in eyes, skin, and brain, protects against harmful light waves like UV rays. It's essential for maintaining vision, preventing macular degeneration and cataracts, and fights free radical damage.</p>
                            <h5 className='text-dark text-start mb-3 p-4'><span>Read Studies<i className="bi bi-chevron-right ms-2 "></i></span></h5>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Experts