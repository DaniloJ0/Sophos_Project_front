import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';

function FormEditPro({ dataProf }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [editForm, setEditForm] = useState({
    'id': dataProf.id,
    'nombre': dataProf.nombre,
    'apellido': dataProf.apellido,
    "email": dataProf.email,
    "expYear": dataProf.expYear,
    "maxTitulo": dataProf.maxTitulo,
    "idDept": dataProf.idDeptNavigation.id
  });
  const { id } = useParams()

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(editForm)
    }
  }, [formErrors])

  const setField = (field, value) => {
    setEditForm({
      ...editForm,
      [field]: value
    })
  }



  const editButton = async () => {
    console.log(editForm)
    setFormErrors(validate(editForm))
    setIsSubmit(true)
    try {
      await axios.put(`https://localhost:7268/api/profesores/${id}`, editForm)
      swal.fire({
        text: "El profesor se ha actualizado correctamente",
        icon: "success",
        timer: 1200
      }).then(res => {
        setShow(false)
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

  const validate = (values) => {
    const errors = {}
    const adver = "Este campo es requerido"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nombre) errors.nombre = adver
    if (!values.apellido) errors.apellido = adver
    if (!values.email) {
      errors.email = adver
    } else if (!regex.test(values.email)) {
      errors.email = "El formato del email no es valido"
    }

    if (!values.maxTitulo) errors.maxTitulo = adver
    if (!values.expYear) errors.expYear = adver
    if (!values.idDept) errors.idDept = adver
    return errors
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='createCourseTittle'>Editar Profesor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <Form.Label><strong>Nombre </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control type="text"
              defaultValue={dataProf.nombre}
              onChange={(e) => setField('nombre', e.target.value)}
            />
            {formErrors.nombre && <p> <span className='text-danger'>*</span> {formErrors.nombre}</p>}
          </Form.Group>

          <Form.Label><strong> Apellido</strong> </Form.Label>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Control type="text"
              defaultValue={dataProf.apellido}
              onChange={(e) => setField('apellido', e.target.value)}
            />
            {formErrors.apellido && <p> <span className='text-danger'>*</span> {formErrors.apellido}</p>}
          </Form.Group>

          <Form.Label><strong> Email </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="text"
              defaultValue={dataProf.email}
              onChange={(e) => setField('email', e.target.value)}
            />
            {formErrors.email && <p> <span className='text-danger'>*</span> {formErrors.email}</p>}
          </Form.Group>

          <Form.Label><strong> Máximo título </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="maxTitulo">
            <Form.Control type="text"
              defaultValue={dataProf.maxTitulo}
              onChange={(e) => setField('maxTitulo', e.target.value)}
            />
            {formErrors.maxTitulo && <p> <span className='text-danger'>*</span> {formErrors.maxTitulo}</p>}
          </Form.Group>

          <Form.Label><strong> Años de experiencia </strong> </Form.Label>
          <Form.Group className="mb-3" controlId="expYear">
            <Form.Control type="text"
              defaultValue={dataProf.expYear}
              onChange={(e) => setField('expYear', e.target.value)}
            />
            {formErrors.expYear && <p> <span className='text-danger'>*</span> {formErrors.expYear}</p>}
          </Form.Group>

          <Form.Label>Facultad</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Select aria-label="Default select example" disabled>
              <option >{dataProf.idDeptNavigation.name}</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={editButton}>
          Editar profesor
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default FormEditPro