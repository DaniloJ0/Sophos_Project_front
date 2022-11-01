import React from 'react'
import Table from 'react-bootstrap/Table';

function TablaCursoPro({datosCurso}) {
  return (
    datosCurso && datosCurso.length===0?
    <p className='mensaje'>No parte ningún curso </p>:
    <Table striped bordered hover size="sm">
                <thead>
                  <tr className='tableDesign'>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cupos</th>
                    <th>Creditos</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   datosCurso && datosCurso.map((course, index) => {
                      return (
                      <tr key={index} className='tableDesign'>
                        <td><a href={`/cursos/${course.id}`} className='linkId' ><strong>{course.id}</strong></a></td>
                        <td>{course.nombre} </td>
                        <td>{course.cupos}</td>
                        <td>{course.creditos}</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
  )
}

export default TablaCursoPro