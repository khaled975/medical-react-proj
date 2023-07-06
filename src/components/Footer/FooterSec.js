import React from "react";
import './footer.css'
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../Assets/logo.png'
import facebook from '../../Assets/footer/face.png'
import twitter from '../../Assets/footer/twitter.png'
import insta from '../../Assets/footer/insta.png'
import linked from '../../Assets/footer/linkedin.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const FooterSec = ()=>{
    return(
        <>
        <section className="footer-sec">
            <Container>
                <Row className="content">
                    <Col className="col-md-4 col-sm-12">
                        <a href='#' >
                            <img src={logo} className="logo"/>
                        </a>
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="footer-contact d-flex gap-2 align-items-end">
                            <FontAwesomeIcon icon={faPhone}/>
                            <div>
                                <h4>Contact US</h4>
                                <h2>+01 123 456 7890</h2>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-8 col-sm-12">
                        <Row>
                            <Col className="d-flex flex-column col-md-4 col-sm-6">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Booking</a></li>
                                    <li><a href="#">Faq's</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Out Team</a></li>
                                </ul>
                            </Col>
                            <Col className="d-flex flex-column col-md-4 col-sm-6">
                                <h2>Our Service</h2>
                                <ul>
                                    <li><a href="#">Dental Care</a></li>
                                    <li><a href="#">Cardiac Clinic</a></li>
                                    <li><a href="#">Massege Therapy</a></li>
                                    <li><a href="#">Cardiology</a></li>
                                    <li><a href="#">Precise Diagnosis</a></li>
                                    <li><a href="#">Abmbulance Services</a></li>
                                </ul>
                            </Col>
                            <Col className="d-flex flex-column col-md-4 col-sm-6">
                                <h2>Subcribe</h2>
                                <input type="email" placeholder="Email Address"/>
                                <button>Subscribe Now</button>
                                <ul className="d-flex gap-3">
                                    <li><a href="#"><img src={facebook}/></a></li>
                                    <li><a href="#"><img src={twitter}/></a></li>
                                    <li><a href="#"><img src={insta}/></a></li>
                                    <li><a href="#"><img src={linked}/></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="rights">
                    <p>
                        Copyright © 2022 Design & Developed by <strong><a href="#">Khaled Abd El-Mohsen</a></strong>
                    </p>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default FooterSec 