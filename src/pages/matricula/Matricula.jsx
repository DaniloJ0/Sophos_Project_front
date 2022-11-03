import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';
import imagen from "../../img/informacion.png"
import "./matricula.css"
function Matricula() {
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [form, setForm] = useState({
    'idCurso': "",
    'idAlumno': "",
  });
  
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(form)
    }
  }, [formErrors])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const matriculaHandler = async () => { 
    console.log(form)
    setFormErrors(validate(form))
    setIsSubmit(true)
    try {
      await axios.post("https://localhost:7268/api/MatriculaAlumnos", form)
      swal.fire({
      text: "Se ha matriculado correctamente.",
      icon: "success",
      timer: 1500
    }).then(res=>{
      window.location.reload()
    })
    } catch (error) {
      swal.fire({
          title: "Hubo un problema",
          text: error.response.data,
          icon: "error"
      })
    }
  }

  const validate = (values) =>{
    const errors = {}
    const adver = "Este campo es requerido."
    if(!values.idCurso) errors.idCurso = adver
    if(!values.idAlumno) errors.idAlumno = adver
    return errors
}

  return (
    <div className="container mt-5 ">
      <div className='row'>
        <div className='col col-4 border rounded bg-dark text-white d-flex justify-content-center pt-5'>
          <div>
            <div className='d-flex justify-content-center'>
              <img src={imagen} alt="informacion"/>
            </div>
            <p className='fs-2 m-4'>Información matrícula</p>
            <p className='m-4'>Para matricular es necesario conocer el ID tanto del curso como del alumno, tengalos de antemano. </p>
          </div>
        </div>
        <div className='col border rounded '>
          <h2 className='text-center display-5 m-5'>Matrícula</h2>
          <div className='d-flex justify-content-center'>
            <div className='formMiddle mb-5'>
              <Form>
                <Form.Label><strong>Id Curso </strong> </Form.Label>
                <Form.Group className="mb-3" controlId="idCurso">
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el Id del curso"
                    value={form.idCurso}
                    onChange={(e) => setField('idCurso', e.target.value)}
                  />
                  {formErrors.idCurso && <p> <span className='text-danger'>*</span> {formErrors.idCurso}</p>}
                </Form.Group>

                <Form.Label><strong>Id Alumno </strong> </Form.Label>
                <Form.Group className="mb-3" controlId="idAlumno">
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el Id del alumno"
                    value={form.idAlumno}
                    onChange={(e) => setField('idAlumno', e.target.value)}
                  />
                  {formErrors.idAlumno && <p> <span className='text-danger'>*</span> {formErrors.idAlumno}</p>}
                </Form.Group>
              </Form>
                <div className='mt-4 d-flex justify-content-center'>
                  <Button variant="success" type="submit" onClick={matriculaHandler}>
                    Matricular
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matricula