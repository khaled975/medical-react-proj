import React from "react";
import './booking.css'
import { Container, Row ,Col } from "react-bootstrap";
import mobile from '../../Assets/booking/mobile.png'
import person from '../../Assets/booking/person.png'
const Booking=()=>{
    return(
        <>
            <section className="booking-sec" id="booking">
                <div className="container-fluid">
                    <Row className="align-items-center content">
                        <Col className='form col-md-6 col-sm-12'>
                            <form className="d-flex flex-column">
                                <h2>Book Appointment</h2>
                                <select >
                                    <option hidden>Select Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <select>
                                    <option hidden>Select Doctor</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <input type='text' placeholder="Your Name"/>
                                <input type='tel' placeholder="Phone Number"/>
                                <input type='date' placeholder="Phone Number"/>
                                <button>Appointment Now</button>
                            </form>
                        </Col>
                        <Col className="imgs col-md-6 col-sm-12">
                            <div className="d-flex position-relative">
                                <img src={mobile} className="main-img"/>
                                <div className="mobile">
                                    <img src={person}/>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Booking