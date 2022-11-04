import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';

// import {useNavigate} from 'react-router-dom'

function FormAlumnoDesp({facultades}) {
  const [show, setShow] = useState(true);
  const [formErrors, setFormErrors ] = useState({})
  const [isSubmit, setIsSubmit ] = useState(false)
  const [form, setForm] = useState({
    'nombre': "",
    'apellido': "",
    "semestre": "",
    "credtDisp": "0",
    "idDept": ""
  });

 const setField = (field, value)=>{
   setForm({
     ...form,
     [field]: value
   })
 }
  const createAlumnoHandler = async () => {
    console.log("alumno",form)
    setFormErrors(validate(form))
    setIsSubmit(true)
    try {
      await axios.post("https://localhost:7268/api/Alumnos", form)
      swal.fire({text: "El alumno se ha creado correctamente",
      icon: "success",
      timer: 1500
    }).then(res =>{
      setShow(false)
      window.location.reload()
    })
    } catch (error) {
      swal.fire({
          title: "Hubo un problema",
          text: `${error.response.data}`,
          icon: "error"
      })
    }
   }

  const handleClose = () => setShow(false);
  
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(form)
    }
  },[formErrors]) 

  const validate = (values) =>{
    const errors = {}
    const adver = "Este campo es requerido"
    if(!values.nombre) errors.nombre = adver
    if(!values.apellido) errors.apellido = adver
    if(!values.semestre) errors.semestre = adver
    if(!values.idDept) errors.idDept = adver
    return errors
}

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='createCourseTittle'>Crear Alumno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Label><strong>Nombre </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="text" 
              placeholder="Nombre del alumno" 
              value={form.nombre}
              onChange={(e)=> setField('nombre', e.target.value)}
              />
          {formErrors.nombre && <p> <span className='text-danger'>*</span> {formErrors.nombre}</p>}

          </Form.Group>

          <Form.Label><strong>Apellido </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Control type="text" 
              placeholder="Apellido del alumno"
              value={form.apellido}
              onChange={(e)=> setField('apellido', e.target.value)}
            />
         {formErrors.apellido && <p> <span className='text-danger'>*</span> {formErrors.apellido}</p>}

          </Form.Group>

          <Form.Label><strong> Creditos inscritos </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="credtDisp">
            <Form.Control type="text" 
            placeholder="Número de creditos inscritos"
            disabled
            value="0"
            />
          </Form.Group>

          <Form.Label><strong>Semestre </strong></Form.Label>
          <Form.Group className="mb-3" controlId="semestre">
            <Form.Control type="text"
              placeholder="Semestre que cursa" 
              value={form.semestre}
              onChange={(e)=> setField('semestre', e.target.value)}
             />
         {formErrors.semestre && <p> <span className='text-danger'>*</span> {formErrors.semestre}</p>}

          </Form.Group>

          <Form.Label>Facultad</Form.Label>
          <Form.Group className="mb-3" controlId="idDept">
            <Form.Select aria-label="Default select example" 
              onChange={(e)=> setField('idDept', facultades.filter(x=>x.name === e.target.value)[0].id)}
            >
              {facultades.map(facu => {
                return (<option key={facu.id}> {facu.name}</option>)
              })}
            </Form.Select>
         {formErrors.idDept && <p> <span className='text-danger'>*</span> {formErrors.idDept}</p>}
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={createAlumnoHandler}>
          Crear alumno 
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default FormAlumnoDesp