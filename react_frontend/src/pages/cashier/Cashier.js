import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';

import API from "../../services/Api";
import Modal from '../../components/Modal/ModalCashier';

export default function Cashier() {

    const [cashierInput, setCashierInputs] = useState([]);
    const [cashierExits, setCashierExits] = useState([]);
    const [caixaTotal, setCaixaTotal] = useState(0);

    async function getInputs() {
        const inputs = await API.get("/caixas/entradas");
        setCashierInputs(inputs.data);
    }
    async function getExits() {
        const saidas = await API.get("/caixas/saidas");
        setCashierExits(saidas.data);
    }
    async function getTotal() {
        const total = await API.get("/caixas/total");
        setCaixaTotal(total.data.total);
    }

    useEffect(() => {
        getInputs();
        getExits();
        getTotal();
    }, []);

    return (
      <div className="lista">

        <div className="div-modal">
            <Modal getInputs={getInputs} getExits={getExits} getTotal={getTotal} />
        </div>  

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

        <div className="div-table-inputs">
            <h4>Entradas</h4>

            <Table striped bordered hover>
                <thead>

                    <tr>
                    <th>Data Inserção</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    </tr>

                </thead>
                <tbody>

                    {cashierInput.map(value => {
                        return(
                            <tr key={value._id}>
                                <td>{value.data_insercao}</td>
                                <td>R$ {value.valor.toFixed(2)}</td>
                                <td>{value.descricao}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>        
        </div>

        <div className="div-table-exits">
            <h4>Saidas</h4>

            <Table striped bordered hover>
                <thead>

                    <tr>
                    <th>Data Inserção</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    </tr>

                </thead>
                <tbody>

                    {cashierExits.map(value => {
                        return(
                            <tr key={value._id}>
                                <td>{value.data_insercao}</td>
                                <td>R$ {value.valor.toFixed(2)}</td>
                                <td>{value.descricao}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>        
        </div>        
        
      </div>
    );
}