import React from "react";
import './contact.css'
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faIdCard, faLocation,faTwitter,faLinkedIn,faInstagram } from "@fortawesome/free-solid-svg-icons";
const Contact=()=>{
    return(
        <>
            <Banner/>
            <section className="contact" id="contact">
                <Container>
                    <Row className="gap-4">
                        <Col className="form">
                        <form className="d-flex flex-column">
                                <input type='text' placeholder="Your Name"/>
                                <input type='email' placeholder="Email"/>
                                <input type='tel' placeholder="Phone Number"/>
                                <select >
                                    <option hidden>Select Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select> 
                                <textarea type='text' placeholder="Type Message"/>
                                <select>
                                    <option hidden>Select Doctor</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <button>Submit</button>
                            </form>
                        </Col>
                        <Col className="info">
                            <div className="box">
                                <h2>Contact Us For Any Informations</h2>
                                <ul>
                                    <li>
                                        <h4><FontAwesomeIcon icon={faLocation}/>Location</h4>
                                        <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    </li>
                                    <li>
                                        <h4><FontAwesomeIcon icon={faIdCard}/>Email & Phone</h4>
                                        <p>
                                            info@yourdomain.com
                                            <br/>
                                            (+68) 120034509
                                        </p>
                                    </li>
                                    <li>
                                        <h4><FontAwesomeIcon icon={faGlobe}/>Follow Us</h4>
                                        <div className="icons">
                                            {/* <FontAwesomeIcon icon={faTwitter} />                                        <FontAwesomeIcon icon={faLink}/> */}
                                            {/* <FontAwesomeIcon icon={faLinkedIn} />    */}
                                            {/* <FontAwesomeIcon icon={faInstagram} />    */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}
export default Contact