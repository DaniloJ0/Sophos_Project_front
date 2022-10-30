import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function FormAlumnoDesp() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className='createCourseTittle'>Crear Alumno</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>

  <Form.Label><strong>Nombre </strong> </Form.Label>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Nombre del alumno"  />
  </Form.Group>

  <Form.Label><strong>Apellido </strong> </Form.Label>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Apellido del alumno"  />
  </Form.Group>

  <Form.Label><strong> Creditos inscritos </strong> </Form.Label>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Número de creditos inscritos" />
  </Form.Group>

  <Form.Label><strong>Semestre </strong></Form.Label>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Semestre que cursa"  />
  </Form.Group>

  <Form.Label><strong>Facultad </strong> </Form.Label>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Select aria-label="Default select example">
        <option>Informatica</option> 
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>

</Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" type="submit">
        Crear alumno
      </Button>
    </Modal.Footer>
  </Modal>  

  )
}

export default FormAlumnoDesp