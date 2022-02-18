import React from "react";
import Table from 'react-bootstrap/Table';

import Modal from './ModalAddRegister';

export default class caixaList extends React.Component {
  render() {
    return (
      <div>

        <div>
            <Modal />
        </div>  

        <div>
            <h4>Entradas</h4>

            <Table striped bordered hover>
                <thead>

                    <tr>
                    <th>Data Inserção</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    <th>Status movimento</th>
                    </tr>

                </thead>
                <tbody>

                    <tr>
                    <td>17-02-2022</td>
                    <td>2,00</td>
                    <td>Vaquinha de alguem</td>
                    <td>Entrada</td>
                    </tr>

                </tbody>
            </Table>        
        </div>

        <div>
            <h4>Saidas</h4>

            <Table striped bordered hover>
                <thead>

                    <tr>
                    <th>Data Inserção</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    <th>Status movimento</th>
                    </tr>

                </thead>
                <tbody>

                    <tr>
                    <td>17-02-2022</td>
                    <td>7,00</td>
                    <td>Coca-Cola</td>
                    <td>Saida</td>
                    </tr>


                </tbody>
            </Table>        
        </div>        
        
      </div>
    );
  }
}

/*
    valor_entrada: Number,
    valor_saida: Number,
    descricao: String,
    status_movimento: Number,
    data_insercao: Date

*/