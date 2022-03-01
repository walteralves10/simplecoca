import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';

import API from "../../services/Api";

export default function CashierExits() {

    const [cashierExits, setCashierExits] = useState([]);
    const [caixaTotal, setCaixaTotal] = useState(0);

    async function getExits() {
        let total = 0;
        const saidas = await API.get("/caixas/saidas");
        
        saidas.data.forEach(element => {
            total += element.valor;
        });

        setCashierExits(saidas.data);
        setCaixaTotal(total);
    };

    useEffect(() => {
        getExits();
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

};