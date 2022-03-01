import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';

import API from "../../services/Api";

export default function CashierInputs() {

    const [cashierInput, setCashierInputs] = useState([]);
    const [caixaTotal, setCaixaTotal] = useState(0);

    async function getInputs() {
        let total = 0;
        const inputs = await API.get("/caixas/entradas");
        
        inputs.data.forEach(element => {
            total += element.valor;
        });
        
        setCashierInputs(inputs.data);
        setCaixaTotal(total);
    }

    useEffect(() => {
        getInputs();
    }, []);

    return (
        <div>
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
        </div>
    );

};