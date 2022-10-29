import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./formEditCurso.css"
//true 
function FormEditCurso() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const profe = null;

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Editar Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre del curso" value="Programación orientada a objetos" />
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Número de creditos" value="9" />
      </Form.Group>

      <Form.Label><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Cantidad de cupos"  value="50"/>
      </Form.Group>

      <Form.Label><strong>Profesor </strong>  (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Identificación del profesor"  value={profe? "Jaime": ""}/>
      </Form.Group>

      <Form.Label><strong>Pre-requisito </strong></Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Id del curso pre-requisito"  value="1"/>
      </Form.Group>

      <Form.Label><strong>Periodo </strong> </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select aria-label="Default select example">
            <option>2022-2</option> 
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Editar curso
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default FormEditCurso