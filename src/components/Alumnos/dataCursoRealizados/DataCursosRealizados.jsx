import React from 'react'
import Table from 'react-bootstrap/Table';
import '../dataCursoMatriculados/dataCurso.css'

function DataCursosRealizados({datos}) {
  console.log("realiz",datos)
  return (
    datos && datos.length===0?
    <p className='mensaje'>El alumno no ha realizado ningún curso. </p>:
    <Table striped bordered hover size="sm">
                <thead className='designTable'>
                  <tr >
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Creditos</th>
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
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
  )
}

export default DataCursosRealizados