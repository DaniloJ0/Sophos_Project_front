import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import swal from 'sweetalert';

import './dataCurso.css'

function DataCursoMatriculados({datos}) {
  async function completarCurso(id)  {
    try {
      await axios.delete(`https://localhost:7268/api/MatriculaAlumnos/${id}/Completado`)
      swal({text: "El curso se ha completado",
      icon: "success",
      timer: 1200
    }).then(res => window.location.reload())
    } catch (error) {
      console.log(error)
      swal({text: "No se pudo realizar la petición",
      icon: "error"})
    }
  }
  
  async function retirarCurso(id){
    
    try {
      await axios.delete(`https://localhost:7268/api/MatriculaAlumnos/${id}/Realizado`)
      swal({text: "El Curso se ha eliminado correctamente",
      icon: "success",
      timer: 1200
    }).then(res => window.location.reload())
    } catch (error) {
      console.log(error)
      swal({text: "No se pudo realizar la petición",
      icon: "error"})
    }
  }

  return (
    datos && datos.length===0?
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
                        <td className='linkDetalles'> <span onClick={()=>retirarCurso(curso.matriculaAlumnos[0].id)}> Retirar</span> | 
                        <span onClick={()=>completarCurso(curso.matriculaAlumnos[0].id)}> Completar</span> </td>
                      </tr>
                      )
                    })
                  }
                </tbody>
        </Table>
       
  )
}

export default DataCursoMatriculados