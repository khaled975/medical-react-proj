import './header.css'
import React, { useState,useEffect } from "react";
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap";
import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faMagnifyingGlass,faPhone } from "@fortawesome/free-solid-svg-icons";
const Header=()=>{
  const [headerBg,setheaderBg]=useState(false)
  useEffect(()=>{
      const scroll =()=>{
          if(window.scrollY>50){
              setheaderBg(true)
          }else{
              setheaderBg(false)
          }
      }
      window.addEventListener("scroll",scroll)
  })
    return(
        <Navbar expand="lg" className={headerBg?"show":""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about" >About</Nav.Link>
              <Nav.Link href="#services" >Services</Nav.Link>
              <Nav.Link href="#booking" >Booking</Nav.Link>
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <Nav.Link href="#link"><FontAwesomeIcon icon={faMagnifyingGlass} className="sea-icon"/></Nav.Link>
              <Nav.Link href="#link" className="phone"> <FontAwesomeIcon icon={faPhone} className="phone-icon"/> (+01) 999 888 777</Nav.Link>
              <Nav.Link href="#link">
                <button>Contact Us <FontAwesomeIcon icon={faChevronRight} /></button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header