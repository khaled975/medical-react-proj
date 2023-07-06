import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container,Nav } from "react-bootstrap";
import React from "react";
// import { Link } from "react-router-dom";
import './Banner.css'
const Banner=()=>{
    return(
        <>
            <section className="banner">
                <Container>
                    <h2>#Contact Us</h2>
                    <li>
                        <Nav.Link href='#home'><FontAwesomeIcon icon={faHome}/> Home</Nav.Link> / Contact us
                    </li>
                </Container>
            </section>
        </>
    )
}

export default Banner