import React from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

import Alerta from './alerta';

export default class Formulario extends React.Component {

      constructor(props) {
            super(props)
      
            // Setting up functions
            /*
            this.onChangeValor = this.onChangeValor.bind(this);
            this.onChangeDescricao = this.onChangeDescricao.bind(this);
            this.onChangeStatus = this.onChangeStatus.bind(this);
            */
            this.onChangeForm = this.onChangeForm.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        
            // Setting up state
            this.state = {
              formData: {              
                valor: '',
                descricao: '',
                status: ''
              },
              validationError: false
            }
      } 
    
      /*onChangeValor(e) {
        this.setState({formData: {valor: e.target.value}})
      }
    
      onChangeDescricao(e) {
        this.setState({descricao: e.target.value})
      }
    
      onChangeStatus(e) {
        this.setState({status: e.target.value})
      }*/

      onChangeForm = (field) => (e) => {
        this.setState({
          formData: Object.assign(this.state.formData, { [field]: e.target.value })
        })
      }
    
      onSubmit(e) {
        e.preventDefault()

        //validation      
        if(!this.state.formData.valor || !this.state.formData.descricao || !this.state.formData.status) {
          this.setState({validationError: true});
          return;
        } else {
          this.setState({validationError: false});
        }

        const caixaObject = {
          valor: parseFloat(this.state.valor),
          descricao: this.state.descricao,
          status_movimento: this.state.status,
          data_insercao: new Date().toLocaleDateString() 
        };
        
        
        axios.post('http://localhost:8000/api/caixas', caixaObject)
        .then(res => {
          console.log(res.data);
        });
    
        this.setState({formData: {valor: '', descricao: '', status: ''}});
        this.props.handleClose();
      }

    render() {
        return(
          <Form ref={this.props.formRef} onSubmit={this.onSubmit}>

              <Form.Group controlId=''>
                  <Form.Label>Valor</Form.Label>
                  <Form.Control type="text" value={this.state.formData.valor} onChange={this.onChangeForm('valor')}/>                    
              </Form.Group>

              <Form.Group controlId=''>
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control type="text" value={this.state.formData.descricao} onChange={this.onChangeForm('descricao')}/>                    
              </Form.Group>

              <Form.Group controlId=''>
                  <Form.Label>Status Movimento</Form.Label>
                  
                    <Form.Select value={this.state.formData.status} onChange={this.onChangeForm('status')}>
                      <option >Selecione ...</option>
                      <option value={"entrada"} >Entrada</option>
                      <option value={"saida"}   >Saida</option>
                    </Form.Select>                    
              </Form.Group>

              {this.state.validationError && <Alerta  />}

          </Form>
        );
    }

}