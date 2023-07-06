import React from "react";
import './services.css'
import { Row,Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Services= ()=>{
    return(
        <>
            <section className="services-sec" id="services">
                <Container>
                    <div className="heading">
                        <h4>Working Process</h4>
                        <h2>How we works?</h2>
                    </div>
                    <Row className="gap-3 align-items-center justify-content-center">
                        <div className='box col-lg-4 col-md-6 col-sm-12'>
                            <span>01</span>
                            <h4>Make Appointmnet</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More <FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                        <div className='box col-lg-4 col-md-6 col-sm-12'>
                            <span>02</span>
                            <h4>Take Treatment</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>Contact Us <FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                        <div className='box col-lg-4 col-md-6 col-sm-12'>
                            <span>03</span>
                            <h4>Registration</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>Contact Us <FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services