import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Carousel from 'react-bootstrap/Carousel';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
const Experts = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
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
        <Container>
            <div className='col text-center p-4'>
                <h2>Hear from Our Experts</h2>
                {/* <div className=' d-flex justify-content-center p-4'> */}
                    <Image src={require('../assets/expertsBanner.png')} className="w-100"></Image>
                {/* </div> */}
                <p className='pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div class="col" style={{ maxWidth: '50%', margin: '0 auto' }}>
                    <Image src={require('../assets/drop.png')} fluid width={50} className='mb-4'></Image>
                    <h5 className='fw-bold mb-4'>Your Natural Harmony:<br />
                        Substances in Tune with Your Body</h5>
                    <p>Our Scientists have uncovered how active compounds within BRAND’S® products work to positively impact mental and physical performance. </p>
                </div>

                {/* slider */}

                <div className="slider-container">
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
        </Container>
    )
}

export default Experts