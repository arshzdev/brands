import React from 'react'
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const ResearchPaper = () => {
    return (
        <div className='research-content'>
            <Container>
                <div className='col text-center p-4'>
                    <h1 className='mb-5 mt-5'>Our Research Paper</h1>
                    <div className='custome-paper row justify-content-center'>
                        <div className=' col-md-2 col-sm-5 me-4'>
                            <Image src={require('../assets/paper.png')} className='d-flex align-items-start mb-4 me-2'></Image>
                            <p className='fw-bold text-secondary text-start'>Large acute thermic response to chicken essence in humans</p>
                            <p className='text-dark text-start'>Geissler, C.; Boroumand Naini, M.; Tomassen, C.</p>
                        </div>
                       <div className=' col-md-2 col-sm-5 me-4'>
                            <Image src={require('../assets/paper.png')} className='d-flex align-items-start mb-4 me-2'></Image>
                            <p className='fw-bold text-secondary text-start'>Use of a traditional blood remedy. A study on regular blood donors</p>
                            <p className='text-dark text-start'>A. T. Williams &S. A. Schey</p>
                        </div>
                        <div className=' col-md-2 col-sm-5 me-4'>
                            <Image src={require('../assets/paper.png')}  className='d-flex align-items-start mb-4 me-2'></Image>
                            <p className='fw-bold text-secondary text-start'>Effects of chicken extract on the recovery from fatigue caused by mental workload</p>
                            <p className='text-dark text-start'>Geissler, C.; Boroumand Naini, M.; Tomassen, C.</p>
                        </div>
                        <div className=' col-md-2 col-sm-5 me-4'>
                            <Image src={require('../assets/paper.png')}  className='d-flex align-items-start mb-4 me-2'></Image>
                            <p className='fw-bold text-secondary text-start'>Large acute thermic response to chicken essence in humans</p>
                            <p className='text-dark text-start'>Geissler, C.; Boroumand Naini, M.; Tomassen, C.</p>
                        </div>
                        <div className=' col-md-2 col-sm-5'>
                            <Image src={require('../assets/paper.png')}  className='d-flex align-items-start mb-4 me-2'></Image>
                            <p className='fw-bold text-secondary text-start'>Large acute thermic response to chicken essence in humans</p>
                            <p className='text-dark text-start'>Geissler, C.; Boroumand Naini, M.; Tomassen, C.</p>
                        </div>
                    </div>
                    <div>
                    <p className='fw-bold m-5'><span>SEE ALL<i className="bi bi-chevron-right ms-3 "></i></span></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ResearchPaper