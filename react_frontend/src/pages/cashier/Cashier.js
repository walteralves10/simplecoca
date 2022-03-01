import React, {useState, useEffect, useMemo} from "react";
import {Table, Container, Col, Row} from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
//BsSearch

import API from "../../services/Api";
import Modal from '../../components/Modal/ModalCashier';

export default function Cashier() {

    const [cashierGeneral, setCashierGeneral] = useState([]);
    const [caixaTotal, setCaixaTotal] = useState(0);
    const [seach, setSeach] = useState('');

    const cashierFilter = useMemo(() => {

        const lowerSeach = seach.toLocaleLowerCase();
        return cashierGeneral.filter(value => 
            value.data_insercao.toLocaleLowerCase().includes(lowerSeach) ||
            value.descricao.toLocaleLowerCase().includes(lowerSeach) ||
            value.status_movimento.toLocaleLowerCase().includes(lowerSeach) || 
            value.valor.toString() === lowerSeach
        );
    }, [seach, cashierGeneral]);  

    async function getAllCashier() {
        const all = await API.get("/caixas");
        setCashierGeneral(all.data);
    };
   
    async function getTotal() {
        const total = await API.get("/caixas/total");
        setCaixaTotal(total.data.total);
    };
    
    useEffect(() => {
        getAllCashier();
        getTotal();
    }, []);

    return (
      <div className="lista" >

        <Container style={{margin:"10px 0px"}}>
            <Row>
                <Col></Col>
                <Col md="auto">
                    <div className="div-input" style={{display: "flex", justifyContent:"center"}}>
                        <input 
                            placeholder="Buscar..."
                            type="text"
                            value={seach}
                            onChange={(event) => setSeach(event.target.value)}
                        />
                        <BsSearch style={{width:"28px", height:"28px", marginLeft:"2px"}}/>
                    </div>
                </Col>
                <Col xs lg="1">
                    <div className="div-modal">
                        <Modal getAllCashier={getAllCashier} getTotal={getTotal} />
                    </div>  
                </Col>
            </Row>
        </Container>

        <div className="div-total">
        <Table striped bordered hover>

                <tbody>

                    <tr>
                    <th>Total</th>
                    <th>R$ {caixaTotal.toFixed(2)}</th>
                    </tr>

                </tbody>
            </Table>  
        </div>

        <div className="div-table-movements">
            

            <Table striped bordered hover>
                <thead>

                    <tr>
                    <th>Data Inserção</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    </tr>

                </thead>
                <tbody>

                    {cashierFilter.map(value => {
                        return(
                            <tr key={value._id}>
                                <td>{value.data_insercao}</td>
                                <td>R$ {value.valor.toFixed(2)}</td>
                                <td>{value.descricao}</td>
                                <td>{value.status_movimento}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>        
        </div>
        
      </div>
    );
}

// cashierGeneral.filter(value => value.descricao.includes(seach))