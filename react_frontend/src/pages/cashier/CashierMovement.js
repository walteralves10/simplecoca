import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';

import Cashier from './Cashier';
import CashierInputs from './CashierInputs';
import CashierExits from './CashierExits';


export default function CashierMovement () {

    const [showMovements, setShowMovements] = useState(true);
    const [showInputs, setShowInputs] = useState(false);
    const [showExits, setShowExits] = useState(false);

    const handleSelect = (eventKey) => {
        
        if(eventKey === "movements") {
            setShowMovements(true);
            setShowInputs(false);
            setShowExits(false);
        }

        if(eventKey === "inputs") {
            setShowMovements(false);
            setShowInputs(true);
            setShowExits(false);
        }

        if(eventKey === "exits") {
            setShowMovements(false);
            setShowInputs(false);
            setShowExits(true);
        }
    };

    return(
            <div className="Cashier">
                <Nav fill variant="tabs" defaultActiveKey="#movements" onSelect={handleSelect}>
                
                    <Nav.Item>
                        <Nav.Link eventKey="movements" href="#movements" >Movimentação Geral </Nav.Link> 
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link eventKey="inputs" >Entradas </Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link eventKey="exits" >Saidas </Nav.Link>
                    </Nav.Item>

                </Nav>    

                <Container >
                    {showMovements && <Cashier />}
                    {showInputs && <CashierInputs />}
                    {showExits && <CashierExits />}
                </Container>    
                
            </div>
        
    );
}