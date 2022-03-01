import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import API from "../../services/Api";
import Alert from '../Alert/Alert';

export default function ModalCashier(props) {

        const formRef = useRef();

        const [state, setState] = useState({
          formData: {              
            valor: '',
            descricao: '',
            status: ''
          },
          validationError: false
        });
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const onChangeForm = (field) => (e) => {
          setState((old) => ({
            ...old,
            formData: Object.assign(state.formData, { [field]: e.target.value })
          }))
        };

        const onSubmit = (e) => {
          e.preventDefault()
  
          //validation      
          if(!state.formData.valor || !state.formData.descricao || !state.formData.status) {
            setState({validationError: true});
            return;
          } else {
            setState({validationError: false});
          }
  
          const cashierObject = {
            valor: parseFloat(state.formData.valor),
            descricao: state.formData.descricao,
            status_movimento: state.formData.status,
            data_insercao: new Date().toLocaleDateString() 
          };
          
          API.post("/caixas", cashierObject)
          .then(res => {
            console.log(res.data);
            props.getTotal();
            props.getAllCashier();
            // if(res.data.status_movimento === "entrada") {
            //   props.getInputs();
            // } else {
            //   props.getExits();
            // }
          });
      
          setState(old => ({
            ...old,
            formData: {valor: '', descricao: '', status: ''}
          }));
          handleClose();
        }

        return (
            <>
              <Button 
              style={{
                float: "right",
                height: "30px",
                font: "icon"
              }} 
              variant="primary" 
              onClick={handleShow}
              >
                Adicionar
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Movimentação</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
      
                    {/* <Form handleClose={handleClose} formRef={formRef} /> */}
                    <Form ref={formRef} onSubmit={onSubmit}>

                      <Form.Group controlId='valor'>
                          <Form.Label>Valor</Form.Label>
                          <Form.Control type="text" value={state.formData.valor} onChange={onChangeForm('valor')}/>                    
                      </Form.Group>

                      <Form.Group controlId='descricao'>
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control type="text" value={state.formData.descricao} onChange={onChangeForm('descricao')}/>                    
                      </Form.Group>

                      <Form.Group controlId='status'>
                          <Form.Label>Status Movimento</Form.Label>
                          
                            <Form.Select value={state.formData.status} onChange={onChangeForm('status')}>
                              <option >Selecione ...</option>
                              <option value={"entrada"} >Entrada</option>
                              <option value={"saida"}   >Saida</option>
                            </Form.Select>                    
                      </Form.Group>

                      {state.validationError && <Alert />}

                    </Form>
      
                </Modal.Body>
                
                <Modal.Footer>

                <Button variant="primary" 
                  onClick={()=>formRef.current.dispatchEvent(
                    new Event("submit", { bubbles: true, cancelable: true })
                  )}
                >
                    salvar
                </Button>

                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                </Modal.Footer>
      
              </Modal>
            </>
          );
}