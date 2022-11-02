import React from 'react'
import Table from 'react-bootstrap/Table';
import "./alumTableCurso.css" 

function AlumTableCurso({alumno}) {
    // console.log("alumno 1", alumno && alumno)+
    // const [infoCurso, setCursos] = useState([])
  return (
    alumno && alumno.length===0?
    <p className='mensaje'>No hay ningun alumno matriculado </p>:
    <Table striped bordered hover size="sm" >
                <thead>
                  <tr className='tableDesign'>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Semestre</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   alumno && alumno.map((alum, index) => {
                      return (
                      <tr key={index} className='tableDesign'>
                        <td><a href={`/alumnos/${alum.id}`} className='linkId' ><strong>{alum.id}</strong></a></td>
                        <td>{alum.nombre} </td>
                        <td>{alum.apellido}</td>
                        <td>{alum.semestre}</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
  )
}

export default AlumTableCurso