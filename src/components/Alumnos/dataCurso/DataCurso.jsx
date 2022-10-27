import React from 'react'
import Table from 'react-bootstrap/Table';
import './dataCurso.css'

function DataCurso() {
  let datos = [1]
  return (
    !datos.length?
    <p className='mensaje'>El alumno no ha matriculado ningun curso. </p>:
    <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Profesor</th>
                    <th>Cupos</th>
                    <th>Creditos</th>
                    <th>Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    datos.map(curso => {
                      return (
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Marcos</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Ver curso</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
       
  )
}

export default DataCurso