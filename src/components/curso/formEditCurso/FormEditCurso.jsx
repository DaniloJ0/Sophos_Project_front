import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./formEditCurso.css"
//true 
function FormEditCurso({datosCurso}) {
  console.log("llega: ", datosCurso)
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [periodos, setPeriodos] = useState([])

  useEffect(()=>{
    const getPeriodos = async () => {
      try {
        const response = await axios.get(`https://localhost:7268/api/periodos`)
        const { data } = response
        console.log(data)
        setPeriodos(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPeriodos()
  }, [])


  const editCurso = () => {}

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Editar Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre del curso" defaultValue ={datosCurso.nombre} />
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Número de creditos" defaultValue ={datosCurso.creditos} />
      </Form.Group>

      <Form.Label ><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Cantidad de cupos"  defaultValue ={datosCurso.cupos} />
      </Form.Group>

      <Form.Label><strong>Profesor </strong>  (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Identificación del profesor"  defaultValue ={datosCurso.idProfesor ==null?"" : datosCurso.idProfesor}/>
      </Form.Group>

      <Form.Label><strong>Pre-requisito </strong></Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Id del curso pre-requisito"  defaultValue ="1"/>
      </Form.Group>

      <Form.Label><strong>Periodo </strong> </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select aria-label="Default select example">
            {periodos && periodos.map(per => {
              return (
                <option key={per.id} >{`${per.year}-${per.semestre}`}</option>
              )
            })}
          </Form.Select>
        </Form.Group>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={editCurso}>
            Editar curso
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default FormEditCurso