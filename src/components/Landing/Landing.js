import React from 'react'
import './landing.css'
import { Col, Container, Row } from 'react-bootstrap'
import heroImg from '../../Assets/landing/heroimg.png'
import symp1 from '../../Assets/shapes/symp1.png'
import symp2 from '../../Assets/shapes/symp2.png'
import symp3 from '../../Assets/shapes/symp3.png'
import symp4 from '../../Assets/shapes/symp4.png'
import wave from '../../Assets/shapes/wave.png'


const Landing=()=>{
    return(
        <>
        <section className='landing-sec' id="home">
            <Container >
                <Row className='align-items-center'>
                    <div className='text col-md-8 col-sm-12'>
                        <h4>We Provide All Health Care Solution</h4>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <button>Read More</button>
                    </div>
                    <div className='img col-md-4 col-sm-12'>
                        <img src={heroImg} alt='img'/>
                    </div>
                </Row>
                    <img src={symp1} className='symp'/>
                    <img src={symp2} className='symp'/>
                    <img src={symp3} className='symp'/>
                    <img src={symp4} className='symp'/>
                    <img src={wave} className='symp'/>
            </Container>
        </section>
        </>
    )
}


export default Landing