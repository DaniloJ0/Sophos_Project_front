import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../../curso/buscadorCurso/buscadorCurso.css"
function BuscadorAlumno() {
  return (
    <Form className="buscador">
    <Form.Control
      type="search"
      placeholder="Buscar alumno"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success" className='btnFormBuscar'>Buscar</Button>
</Form>
    )
}

export default BuscadorAlumno