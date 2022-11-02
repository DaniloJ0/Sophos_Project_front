import React, {useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom"
import swal from 'sweetalert2';
import "./formEditCurso.css"
//true 
function FormEditCurso({datosCurso}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [editForm, setEditForm] = useState({
    'id': datosCurso.id,
    'nombre': datosCurso.nombre,
    'creditos': datosCurso.creditos,
    "idProfesor": datosCurso.idProfesor,
    "cupos": datosCurso.cupos,
    "idPeriodo": datosCurso.idPeriodo,
    "idCursoPre": datosCurso.idCursoPre
  });

  const setField = (field, value)=>{
    setEditForm({
      ...editForm,
      [field]: value
    })
  }
  
  const {id} = useParams()

  const editCurso = async () => {
    console.log("form", editForm)
    setShow(false)
    try {
      await axios.put(`https://localhost:7268/api/cursos/${id}`, editForm)
      swal.fire({text: "El profesor se ha actualizado correctamente",
      icon: "success",
      timer: 1200
    }).then(res =>{
      window.location.reload()
    })
    } catch (error) {
      console.log(error)
      swal.fire({
          title: "Hubo un problema",
          text: error.response.data,
          icon: "error"
      })
    }
}


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Editar Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre del curso </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" 
         defaultValue ={datosCurso.nombre}
         onChange={(e)=> setField('nombre', e.target.value)} />
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="creditos">
        <Form.Control type="text" 
        defaultValue ={datosCurso.creditos}
         onChange={(e)=> setField('creditos', e.target.value)} />
      </Form.Group>

      <Form.Label ><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="cupos">
        <Form.Control type="text" 
        defaultValue ={datosCurso.cupos}
         onChange={(e)=> setField('cupos', e.target.value)} />
      </Form.Group>

      <Form.Label><strong>Profesor </strong>  (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="idProfesor">
        <Form.Control type="text"  
        defaultValue ={datosCurso.idProfesor === ""? null : datosCurso.idProfesor}
        onChange={(e)=> setField('idProfesor', e.target.value)}
        />
      </Form.Group>

      <Form.Label><strong>Id pre-requisito</strong> (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="idCursoPre">
        <Form.Control type="text" 
        defaultValue ={datosCurso.idCursoPre === ""? null : datosCurso.idCursoPre }
         onChange={(e)=> setField('idCursoPre', e.target.value)}
        />
      </Form.Group>

      <Form.Label><strong>Periodo </strong> </Form.Label>
        <Form.Group className="mb-3" controlId="idPeriodo">
          <Form.Select aria-label="Default select example" disabled>
            <option>{`${datosCurso.idPeriodoNavigation.year}-${datosCurso.idPeriodoNavigation.semestre}`}</option>
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