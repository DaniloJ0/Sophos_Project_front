import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';


function FormAlumno({datosCurso}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [formErrors, setFormErrors ] = useState({})
  const [isSubmit, setIsSubmit ] = useState(false)
  const [editForm, setEditForm] = useState({
    'id': datosCurso.infoAlumno.id,
    'nombre': datosCurso.infoAlumno.nombre,
    'apellido': datosCurso.infoAlumno.apellido,
    "semestre": datosCurso.infoAlumno.semestre,
    "credtDisp": datosCurso.infoAlumno.credtDisp,
    "idDept": datosCurso.infoAlumno.idDeptNavigation.id
  });
  const {id} = useParams()

  const setField = (field, value)=>{
    setEditForm({
      ...editForm,
      [field]: value
    })
  }
  
  const editButton = async () => {
      console.log("editAlum", editForm)
      setFormErrors(validate(editForm))
      setIsSubmit(true)
      try {
        await axios.put(`https://localhost:7268/api/Alumnos/${id}`, editForm)
        swal.fire({text: "El alumno se ha actualizado correctamente",
        icon: "success",
        timer: 1200
      }).then(res =>{
        setShow(false)
        window.location.reload()
      })
      } catch (error) {
        swal.fire({
            title: "Hubo un problema",
            text: "Por favor, intenlo de nuevo",
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
    if(!values.apellido) errors.apellido = adver
    if(!values.semestre) errors.semestre = adver
    return errors
  }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Editar Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control type="text"
         defaultValue ={datosCurso.infoAlumno.nombre}
         onChange={(e)=> setField('nombre', e.target.value)}
         />
        {formErrors.nombre && <p> <span className='text-danger'>*</span> {formErrors.nombre}</p>}
      </Form.Group>

      <Form.Label><strong> Apellido</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Control type="text" 
         defaultValue ={datosCurso.infoAlumno.apellido} 
         onChange={(e)=> setField('apellido', e.target.value)}
         />
        {formErrors.apellido && <p> <span className='text-danger'>*</span> {formErrors.apellido}</p>}

      </Form.Group>

      <Form.Label><strong> Semestre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="semestre">
        <Form.Control type="text"  
         defaultValue ={datosCurso.infoAlumno.semestre}
         onChange={(e)=> setField('semestre', e.target.value)}
         />
      {formErrors.semestre && <p> <span className='text-danger'>*</span> {formErrors.semestre}</p>}

      </Form.Group>

      <Form.Label><strong> Creditos Matriculados </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="creditos">
        <Form.Control type="text" 
          disabled
          defaultValue ={datosCurso.infoAlumno.credtDisp}
          onChange={(e)=> setField('creditos', e.target.value)}
          />
      </Form.Group>

      <Form.Label>Facultad</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select aria-label="Default select example" disabled>
              <option >{datosCurso.infoAlumno.idDeptNavigation.name}</option>
          </Form.Select>
        </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={editButton}>
            Editar Alumno
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default FormAlumno;