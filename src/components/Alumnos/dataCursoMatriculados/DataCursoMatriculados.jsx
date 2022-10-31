import React from 'react'
import Table from 'react-bootstrap/Table';
import './dataCurso.css'

function DataCursoMatriculados({datos}) {
  const retirarCurso = () =>{}
  const completarCurso = () =>{}

  return (
    !datos?
    <p className='mensaje'>El alumno no ha matriculado ningún curso. </p>:
    <Table striped bordered hover size="sm">
                <thead className='designTable'>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Creditos</th>
                    <th>Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {datos && 
                    datos.map((curso,index) => {
                      return (
                      <tr key={index} className='designTable'>
                        <td><a href={`/cursos/${curso.id}`} className='linkId' ><strong>{curso.id}</strong></a></td>
                        <td>{curso.nombre}</td>
                        <td>{curso.creditos}</td>
                        <td className='linkDetalles'> <span onClick={retirarCurso}> Retirar</span> | <span onClick={completarCurso}>Completar</span> </td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
       
  )
}

export default DataCursoMatriculados