import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.css';

export default class Formulario extends React.Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeValor = this.onChangeValor.bind(this);
        this.onChangeDescricao = this.onChangeDescricao.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          valor: '',
          descricao: '',
          status: ''
        }
      }
    
      onChangeValor(e) {
        this.setState({valor: e.target.value})
      }
    
      onChangeDescricao(e) {
        this.setState({descricao: e.target.value})
      }
    
      onChangeStatus(e) {
        this.setState({status: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Student successfully created!`);
        console.log(`Valor: ${this.state.valor}`);
        console.log(`descricao: ${this.state.descricao}`);
        console.log(`status: ${this.state.status}`);
        console.log(`Data: ${new Date()}`)
    
        this.setState({valor: '', descricao: '', status: ''})
      }

    render() {
        return(
                  <Form onSubmit={this.onSubmit}>
      
                      <Form.Group controlId=''>
                          <Form.Label>Valor</Form.Label>
                          <Form.Control type="text" value={this.state.valor} onChange={this.onChangeValor}/>                    
                      </Form.Group>
      
                      <Form.Group controlId=''>
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control type="text" value={this.state.descricao} onChange={this.onChangeDescricao}/>                    
                      </Form.Group>
      
                      <Form.Group controlId=''>
                          <Form.Label>Status Movimento</Form.Label>
                          <Form.Control type="text" value={this.state.status} onChange={this.onChangeStatus}/>                    
                      </Form.Group>
                    
                      <div className="justify-content-end">
                        <Button variant="primary" block="block" type="submit">
                            salvar
                        </Button>
                      </div>
      
                  </Form>
        );
    }

}