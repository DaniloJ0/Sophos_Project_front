import React, {useState, useEffect } from 'react'
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
  const [formErrors, setFormErrors ] = useState({})
  const [isSubmit, setIsSubmit ] = useState(false)
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
    editForm.idProfesor= editForm.idProfesor===""? null: editForm.idProfesor
    editForm.idCursoPre= editForm.idCursoPre===""? null: editForm.idCursoPre
    
    console.log("form", editForm)
    setFormErrors(validate(editForm))
    setIsSubmit(true)
    try {
      await axios.put(`https://localhost:7268/api/cursos/${id}`, editForm)
      swal.fire({text: "El profesor se ha actualizado correctamente",
      icon: "success",
      timer: 1200
    }).then(res =>{
      setShow(false)
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

useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length ===0 && isSubmit){
    console.log(editForm)
  }
},[formErrors])


const validate = (values) =>{
  const errors = {}
  const adver = "Este campo es requerido"
  if(!values.nombre) errors.nombre = adver
  if(!values.creditos) errors.creditos = adver
  if(!values.cupos) errors.cupos = adver
  return errors
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
         {formErrors.nombre && <p> <span className='text-danger'>*</span> {formErrors.nombre}</p>}
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="creditos">
        <Form.Control type="text" 
        defaultValue ={datosCurso.creditos}
         onChange={(e)=> setField('creditos', e.target.value)} />
        {formErrors.creditos && <p> <span className='text-danger'>*</span> {formErrors.creditos}</p>}
      </Form.Group>

      <Form.Label ><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="cupos">
        <Form.Control type="text" 
        defaultValue ={datosCurso.cupos}
         onChange={(e)=> setField('cupos', e.target.value)} />
        {formErrors.cupos && <p> <span className='text-danger'>*</span> {formErrors.cupos}</p>}
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