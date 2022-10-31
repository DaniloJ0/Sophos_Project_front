import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function FormAlumno({datosCurso}) {
  const [facultades, setFacultades ] = useState([])
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(()=>{
    const getAlumnos = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Facultades`)
            const {data} =  response
            setFacultades(data)
          } catch (error) {
            console.log(error)
        }
    }
    getAlumnos()
  }, [])

  const editButton = () => {}



  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='createCourseTittle'>Editar Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Label><strong>Nombre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" defaultValue ={datosCurso.infoAlumno.nombre}  />
      </Form.Group>

      <Form.Label><strong> Apellido</strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"  defaultValue ={datosCurso.infoAlumno.apellido} />
      </Form.Group>

      <Form.Label><strong> Semestre </strong> </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"   defaultValue ={datosCurso.infoAlumno.semestre}/>
      </Form.Group>

      <Form.Label>Departmento</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select aria-label="Default select example">
            <option key={datosCurso.infoAlumno.idDeptNavigation.id}>{datosCurso.infoAlumno.idDeptNavigation.name}</option> 
            {facultades.map(facu => {
              return (<option key={facu.id}>{facu.name}</option>)
            })}
            
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