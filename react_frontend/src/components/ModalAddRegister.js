import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';

import Formulario from './Formulario';

export default function ModalAddRegister() {

        const [show, setShow] = useState(false);
  
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
              <Button variant="primary" onClick={handleShow}>
                Adicionar
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Movimentação</Modal.Title>
                </Modal.Header>
                
                <Modal.Body> formulario
      
                    <Formulario />
      
                </Modal.Body>
                
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                </Modal.Footer>
      
              </Modal>
            </>
          );
}