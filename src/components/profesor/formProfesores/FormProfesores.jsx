import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';

function FormProfesores() {
  const [show, setShow] = useState(true);
  const [facultades, setFacultades] = useState([])
  const [formErrors, setFormErrors ] = useState({})
  const [isSubmit, setIsSubmit ] = useState(false)
  const [form, setForm] = useState({
    "nombre": "",
    "apellido": "",
    "email": "",
    "maxTitulo": "",
    "expYear": "",
    "idDept": ""
  });

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

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(form)
    }
  },[formErrors]) 

 const setField = (field, value)=>{
   setForm({
     ...form,
     [field]: value
   })
 }

 const createProfesorHandler = async () => {
    console.log(form)
    setFormErrors(validate(form))
    setIsSubmit(true)
    try {
      await axios.post("https://localhost:7268/api/profesores", form)
      swal.fire({text: "El profesor se ha creado correctamente",
      icon: "success",
      timer: 1000
    }).then(res =>{
      setShow(false)
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

  const validate = (values) =>{
      const errors = {}
      const adver = "Este campo es requerido"
      const  regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.nombre) errors.nombre = adver
      if(!values.apellido) errors.apellido = adver
      if(!values.email){
        errors.email = adver
      } else if (!regex.test(values.email)){
        errors.email = "El formato del email no es valido" 
      }
        
      if(!values.maxTitulo) errors.maxTitulo = adver
      if(!values.expYear) errors.expYear = adver
      if(!values.idDept) errors.idDept = adver
      return errors
  }

 const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className='createCourseTittle'>Crear Profesor</Modal.Title>
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

        <Form.Label><strong> Email </strong> </Form.Label>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" 
          placeholder="Email profesional"
          value={form.email}
          onChange={(e)=> setField('email', e.target.value)}
          />
         {formErrors.email && <p> <span className='text-danger'>*</span> {formErrors.email}</p>}
          
        </Form.Group>

        <Form.Label><strong>Máximo título </strong></Form.Label>
        <Form.Group className="mb-3" controlId="maxTitulo">
          <Form.Control type="text"
            placeholder="Máximo título conseguido" 
            value={form.maxTitulo}
            onChange={(e)=> setField('maxTitulo', e.target.value)}
           />
         {formErrors.maxTitulo && <p> <span className='text-danger'>*</span> {formErrors.maxTitulo}</p>}

        </Form.Group>

        <Form.Label><strong>Años de experiencia </strong></Form.Label>
        <Form.Group className="mb-3" controlId="expYear">
          <Form.Control type="text"
            placeholder="Años de experiencia en el campo" 
            value={form.expYear}
            onChange={(e)=> setField('expYear', e.target.value)}
           />
         {formErrors.expYear && <p> <span className='text-danger'>*</span> {formErrors.expYear}</p>}
        </Form.Group>

        <Form.Label>Facultad</Form.Label>
        <Form.Group className="mb-3" controlId="idDept">
          <Form.Select aria-label="Default select example" 
            onChange={(e)=> setField('idDept', facultades.filter(x=>x.name === e.target.value)[0].id)}>
            {facultades.map(facu => {
              return (<option key={facu.id}> {facu.name}</option>)
            })}
          </Form.Select>
          {formErrors.idDept && <p> <span className='text-danger'>*</span> {formErrors.idDept}</p>}

        </Form.Group>

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" type="submit" onClick={createProfesorHandler}>
        Crear profesor 
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default FormProfesores