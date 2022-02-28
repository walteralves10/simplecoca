import React from "react";
import Nav from 'react-bootstrap/Nav'

export default function CashierMovement () {
    const handleSelect = (eventKey) => <h1>Teste</h1>;

    return(
        <Nav fill variant="tabs" defaultActiveKey="/home" onSelect={handleSelect} >
            
            <Nav.Item>
                <Nav.Link eventKey="entradas" >Active</Nav.Link> 
                {/*href="/seila"*/}
                <h1>Entrada</h1>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="saidas">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="movimentacao">Link</Nav.Link>
            </Nav.Item>

        </Nav>
    );
}