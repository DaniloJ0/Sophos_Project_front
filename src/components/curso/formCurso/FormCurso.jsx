import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';
import "./formCurso.css"

//true 
function FormCurso() {
  const [show, setShow] = useState(true);
  const [periodos, setPeriodos] = useState([])
  const handleClose = () => setShow(false);
  const [createForm, setCreateForm] = useState({
    'nombre': null,
    'creditos': null,
    "idProfesor": null,
    "cupos": null,
    "idPeriodo": null,
    "idCursoPre": null
  });

  const setField = (field, value)=>{
    setCreateForm({
      ...createForm,
      [field]: value
    })
  }

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

  const createCourse = async () => {
    console.log("form", createForm)
    setShow(false)
    try {
      await axios.post(`https://localhost:7268/api/cursos`, createForm)
      swal.fire({text: "El curso se ha creado correctamente",
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
          <Modal.Title className='createCourseTittle'>Crear Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre del Curso </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" 
         defaultValue ={createForm.nombre}
         onChange={(e)=> setField('nombre', e.target.value)} />
      </Form.Group>

      <Form.Label><strong> Creditos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="creditos">
        <Form.Control type="text" 
        defaultValue ={createForm.creditos}
         onChange={(e)=> setField('creditos', e.target.value)} />
      </Form.Group>

      <Form.Label ><strong> Cupos</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="cupos">
        <Form.Control type="text" 
        defaultValue ={createForm.cupos}
         onChange={(e)=> setField('cupos', e.target.value)} />
      </Form.Group>

      <Form.Label><strong>Profesor </strong>  (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="idProfesor">
        <Form.Control type="text"  
        defaultValue ={createForm.idProfesor}
        onChange={(e)=> setField('idProfesor', e.target.value)}
        />
      </Form.Group>

      <Form.Label><strong>Id pre-requisito</strong> (Opcional)</Form.Label>
      <Form.Group className="mb-3" controlId="idCursoPre">
        <Form.Control type="text" 
        defaultValue ={createForm.idCursoPre}
         onChange={(e)=> setField('idCursoPre', e.target.value)}
        />
      </Form.Group>

      <Form.Label><strong>Periodo </strong> </Form.Label>
        <Form.Group className="mb-3" controlId="idPeriodo">
          <Form.Select aria-label="Default select example" 
            onChange={(e)=> setField('idPeriodo', periodos.filter(x=> `${x.year}-${x.semestre}` === e.target.value)[0].id)}>
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
          <Button variant="success" type="submit" onClick={createCourse}>
            Crear curso
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default FormCurso