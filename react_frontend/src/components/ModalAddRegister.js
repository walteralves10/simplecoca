import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';

import Formulario from './Formulario';

export default function ModalAddRegister() {

        const formRef = useRef();
        const [show, setShow] = useState(false);
  
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
              <Button 
              style={{
                float: "right",
                margin: "10px 0px",
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
      
                    <Formulario handleClose={handleClose} formRef={formRef} />
      
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