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

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CaixaList from "./components/CaixaList";
import Home from "./components/Home";

function App() {
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

                  <Route path="/logo" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route exact path="/caixa" element={<CaixaList/>}/>

                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div> 
    </Router>
  );
}

export default App;

/**

        <ul>

          <li>
            <Link to="/caixa">Gerenciamento</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>

 */