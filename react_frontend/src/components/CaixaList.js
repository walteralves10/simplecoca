import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import Modal from './ModalAddRegister';

export default function CaixaList() {

    const [caixaEntradas, setCaixaEntradas] = useState([]);
    const [caixaSaidas, setCaixaSaidas] = useState([]);
    const [caixaTotal, setCaixaTotal] = useState(0);

    useEffect(() => {
        (async () => {

            const entradas = await axios.get("http://localhost:8000/api/caixas/entradas");
            setCaixaEntradas(entradas.data);

            const saidas = await axios.get("http://localhost:8000/api/caixas/saidas");
            setCaixaSaidas(saidas.data);

            const total = await axios.get("http://localhost:8000/api/caixas/total");
            setCaixaTotal(total.data.total);

        })();
    }, []);

    return (
      <div className="lista">

        <div className="div-modal">
            <Modal />
        </div>  

        <div className="div-total">
        <Table striped bordered hover>

                <tbody>

                    <tr>
                    <th>Total</th>
                    <th>{caixaTotal}</th>
                    </tr>

                </tbody>
            </Table>  
        </div>

        <div className="div-table-entradas">
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

                    {caixaEntradas.map(value => {
                        return(
                            <tr key={value._id}>
                                <td>{value.data_insercao}</td>
                                <td>{value.valor.toFixed(2)}</td>
                                <td>{value.descricao}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>        
        </div>

        <div className="div-table-saida">
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

                    {caixaSaidas.map(value => {
                        return(
                            <tr key={value._id}>
                                <td>{value.data_insercao}</td>
                                <td>{value.valor.toFixed(2)}</td>
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