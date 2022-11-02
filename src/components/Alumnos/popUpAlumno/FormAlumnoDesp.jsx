import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';

// import {useNavigate} from 'react-router-dom'

function FormAlumnoDesp() {
  const [show, setShow] = useState(true);
  const [facultades, setFacultades] = useState([])
  const [form, setForm] = useState({
    'nombre': "",
    'apellido': "",
    "semestre": "",
    "credtDisp": "0",
    "idDept": ""
  });

  // const navigate  = useNavigate()
  useEffect(() => {
    const getFacultades = async () => {
      try {
        const response = await axios.get(`https://localhost:7268/api/Facultades`)
        const { data } = response
        console.log(data)
        setFacultades(data)
      } catch (error) {
        console.log(error)
      }
    }
    getFacultades()
  }, [])

  
 const setField = (field, value)=>{
   setForm({
     ...form,
     [field]: value
   })
 }
  const createAlumnoHandler = async () => {
    console.log(form)
    setShow(false)
    try {
      await axios.post("https://localhost:7268/api/Alumnos", form)
      swal.fire({text: "El alumno se ha creado correctamente",
      icon: "success",
      timer: 1000
    }).then(res =>{
      window.location.reload()
    })
    } catch (error) {
      swal.fire({
          title: "Hubo un problema",
          text: "Pruebe seleccionando una facultad diferente antes de escoger la deseada",
          icon: "error"
      })
    }
   }

  const handleClose = () => setShow(false);

   //disabled
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
          </Form.Group>

          <Form.Label><strong>Apellido </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Control type="text" 
              placeholder="Apellido del alumno"
              value={form.apellido}
              onChange={(e)=> setField('apellido', e.target.value)}
            />
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