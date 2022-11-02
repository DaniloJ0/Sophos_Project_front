import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Tab, Tabs } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert2';
import AlumTableCurso from "../../components/curso/tablaCursoAlum/AlumTableCurso";
import FormEditCurso from "../../components/curso/formEditCurso/FormEditCurso";
import "./curso.css"

function Curso() {
  const [formActive, setFormAct] = useState(false)
  const {id} = useParams()
  const [infoCurso, setCursos] = useState([])
  
  useEffect(()=>{
    const getCurso = async () => {
      try {
        const response = await axios.get(`https://localhost:7268/api/Cursos/${id}`)
        const { data } = response
        console.log(data)
        setCursos(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCurso()
  }, [])
  
  const editarButton = ()=> {
    setFormAct(!formActive)
  }
  //const eliminaAlumno 
  const eliminarButton = ()=> {
      swal.fire({
        title: "Eliminar Curso",
        text: '¿Está seguro que desea eliminar el curso?',
        icon: "warning",
        buttons: ["Cancelar", "Aceptar"]
      }).then(res =>{
        if(res){
          swal.fire({text: "El curso se ha eliminado correctamente",
          icon: "success"
        })
        }
      })
  }

  return (
    <div className='contenido'>
      <div className='detalles'>
        <h1 className='tituloNombre'>{infoCurso.curso &&  infoCurso.curso.infoCurso.nombre}</h1>
        <h5 className="infoH5">Infomación</h5>
        <hr/>
        <div className='orgFlex'>
          <div className='infoAlumno'>
            <p className='textInfoAlumno'><strong>Id: </strong> {infoCurso.curso &&  infoCurso.curso.infoCurso.id} </p>
            <p className='textInfoAlumno'><strong>Profesor: </strong> 
            {infoCurso.curso == null? " No asignado" : infoCurso.curso.infoCurso.idProfesorNavigation==null
            ? "No asignado"
            : `${infoCurso.curso.infoCurso.idProfesorNavigation.nombre} ${infoCurso.curso.infoCurso.idProfesorNavigation.apellido}`} </p>
            <p className='textInfoAlumno'><strong>Creditos: </strong> {infoCurso.curso &&  infoCurso.curso.infoCurso.creditos} </p>
            <p className='textInfoAlumno'><strong>Cupos: </strong>{infoCurso.curso &&  infoCurso.curso.infoCurso.cupos} </p>
            <p className='textInfoAlumno'><strong>Alumnos: </strong> {infoCurso.curso &&  infoCurso.curso.matriculados.length}</p>
            <p className='textInfoAlumno'><strong>Pre-requisito: </strong> {infoCurso.preRequisito} </p>
            <p className='textInfoAlumno'><strong>Periodo: </strong> {infoCurso.curso &&  `${infoCurso.curso.infoCurso.idPeriodoNavigation.year}-${infoCurso.curso.infoCurso.idPeriodoNavigation.semestre}`}</p>
          </div>
          <div className='btnsAlumnos'>
            <Button variant="primary" onClick={editarButton}>Editar</Button>{' '}
            <Button variant="danger" onClick={eliminarButton}>Eliminar</Button>{' '}
          </div>
          {formActive && <FormEditCurso datosCurso={infoCurso.curso && infoCurso.curso.infoCurso}/>}
        </div>
        <div>
          <Tabs >
            <Tab eventKey="one" title="Alumnos Matriculados " className='tabs table-responsive'>
                <AlumTableCurso alumno={infoCurso.curso && infoCurso.curso.matriculados}/>
            </Tab>
          </Tabs>
          </div>
      </div>
    </div>
  )
}

export default Curso