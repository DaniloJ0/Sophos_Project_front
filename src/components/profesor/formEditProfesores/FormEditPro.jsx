import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';

function FormEditPro({dataProf}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [editForm, setEditForm] = useState({
    'id': dataProf.id,
    'nombre': dataProf.nombre,
    'apellido': dataProf.apellido,
    "email": dataProf.email,
    "expYear": dataProf.expYear,
    "maxTitulo": dataProf.maxTitulo,
    "idDept": dataProf.idDeptNavigation.id
  });
  const {id} = useParams()

  const setField = (field, value)=>{
    setEditForm({
      ...editForm,
      [field]: value
    })
  }
  
  const editButton = async () => {
      console.log(editForm)
      setShow(false)
      try {
        await axios.put(`https://localhost:7268/api/profesores/${id}`, editForm)
        swal.fire({text: "El profesor se ha actualizado correctamente",
        icon: "success",
        timer: 1200
      }).then(res =>{
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
         defaultValue ={dataProf.nombre}
         onChange={(e)=> setField('nombre', e.target.value)}
         />
      </Form.Group>

      <Form.Label><strong> Apellido</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Control type="text" 
         defaultValue ={dataProf.apellido} 
         onChange={(e)=> setField('apellido', e.target.value)}
         />
      </Form.Group>

      <Form.Label><strong> Email </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="text"  
         defaultValue ={dataProf.email}
         onChange={(e)=> setField('email', e.target.value)}
         />
      </Form.Group>

      <Form.Label><strong> Máximo título </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="maxTitulo">
        <Form.Control type="text" 
          defaultValue ={dataProf.maxTitulo}
          onChange={(e)=> setField('maxTitulo', e.target.value)}
          />
      </Form.Group>

      <Form.Label><strong> Años de experiencia </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="expYear">
        <Form.Control type="text" 
          defaultValue ={dataProf.expYear}
          onChange={(e)=> setField('expYear', e.target.value)}
          />
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