import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./formCurso.css"
//true 
function FormCurso() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Crear Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre del curso"  />
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Número de creditos" />
      </Form.Group>

      <Form.Label><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Cantidad de cupos"  />
      </Form.Group>

      <Form.Label><strong>Profesor </strong>  (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Identificación del profesor"  />
      </Form.Group>

      <Form.Label><strong>Pre-requisito </strong></Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Id del curso pre-requisito"  />
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
            Crear curso
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default FormCurso