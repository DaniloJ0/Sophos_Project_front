import React from 'react'
import Table from 'react-bootstrap/Table';
import "./alumTableCurso.css" 

function AlumTableCurso() {
    const datos = [1]
  return (
    !datos.length?
    <p className='mensaje'>No hay ningun alumno matriculado </p>:
    <Table striped bordered hover size="sm">
                <thead>
                  <tr className='tableDesign'>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Facultad</th>
                    <th>Semestre</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    datos.map(curso => {
                      return (
                      <tr className='tableDesign'>
                        <td><a href="/alumnos/1" className='linkId' ><strong>1</strong></a></td>
                        <td>Mark</td>
                        <td>Informatica</td>
                        <td>9</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
  )
}

export default AlumTableCurso