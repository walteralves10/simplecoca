import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";  

//import Caixa from "./cashier/Cashier";
import CashierMovement from "./cashier/CashierMovement";
import Home from "./home/Home";

export default function Routers() {
    return (
      <Router>

        <div className="App">
          
            <Navbar className="navbar" bg="dark" variant="dark">
              <Container>
                
                <Navbar.Brand>
                  <Link to={"/logo"} className="nav-link"> Simple Coca </Link>
                </Navbar.Brand>                           
  
                <Nav className="justify-content-end">
  
                  <Nav>
                    <Link to={"/home"} className="nav-link"> Home </Link>
                  </Nav>
  
                  <Nav>
                    <Link to={"/caixa"} className="nav-link"> Caixa geral </Link>
                  </Nav>
  
                </Nav>
                
              </Container>
            </Navbar>
         
  
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Routes>
  
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logo" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route exact path="/caixa" element={<CashierMovement/>}/>
  
                  </Routes>
                </div>
              </Col>
            </Row>
          </Container>
        </div> 
      </Router>
    );
}