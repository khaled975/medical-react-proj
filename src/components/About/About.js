import React from "react";
import './about.css'
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../../Assets/about/img1.jpg'
import img2 from '../../Assets/about/img2.jpg'
import img3 from '../../Assets/about/img3.jpg'
import symp1 from '../../Assets/shapes/symp1.png'
import symp2 from '../../Assets/shapes/symp2.png'
import symp3 from '../../Assets/shapes/symp3.png'
import symp4 from '../../Assets/shapes/symp4.png'
import wave from '../../Assets/shapes/wave.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBedPulse, faHeartCirclePlus, faSyringe, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
const About = ()=>{
    return(
        <>
            <section className="about-sec" id="about">
                <Container>
                    <Row className='content align-items-center'>
                        <Col className="imgs d-flex col-sm-12 col-md-6">
                            <Col className='align-items-end d-flex flex-column'>
                                <img src={img2}/>
                                <img src={img3}/>
                            </Col>
                            <Col className='align-items-start d-flex flex-column'>
                                <img src={img1}/>
                                <div>
                                    20
                                    <span>Year Experience</span>
                                </div>
                            </Col>
                        </Col>
                        <Col className=" info col-sm-12 col-md-6">
                            <h4>About Us</h4>
                            <h2>The Great Place Of Medical Hospital Center</h2>
                            <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                            <Row className='boxes d-flex gap-2'>
                                <Col className="d-flex gap-2 flex-column">
                                    <div className="box">
                                        <FontAwesomeIcon icon={faTruckMedical}/>
                                        <span>Emergency Help</span>
                                    </div>
                                    <div className="box">
                                        <FontAwesomeIcon icon={faBedPulse}/>
                                        <span>Qualified Doctors</span>
                                    </div>
                                </Col>
                                <Col className="d-flex gap-2 flex-column">
                                    <div className="box">
                                            <FontAwesomeIcon icon={faHeartCirclePlus}/>
                                            <span>Best Professionals</span>
                                        </div>
                                        <div className="box">
                                            <FontAwesomeIcon icon={faSyringe}/>
                                            <span>Medical Treatment</span>
                                        </div>
                                </Col> 
                            </Row>
                                <button className="col-lg-3">Read More</button>
                        </Col>
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

export default About