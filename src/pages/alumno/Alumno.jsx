import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { Tab, Tabs } from 'react-bootstrap'
import DataCursoMatriculados from '../../components/Alumnos/dataCursoMatriculados/DataCursoMatriculados'
import FormAlumno from '../../components/Alumnos/formAlumno/FormAlumno'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert2';
import "./alumno.css"
import DataCursosRealizados from '../../components/Alumnos/dataCursoRealizados/DataCursosRealizados'

function Alumno() {
  const { id } = useParams()
  //Axios get Alumns
  const [alumnos, setAlumnos] = useState([])
  //Show tabs Courses
  const [tabKey, initTabKey] = useState('one')
  //Show Edit Form
  const [formActive, setFormAct] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    const getAlumnos = async () => {
      try {
        const response = await axios.get(`https://localhost:7268/api/Alumnos/${id}`)
        const { data } = response
        setAlumnos(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAlumnos()
  }, [])

  const editarButton = () => {
    setFormAct(!formActive)
  }

  const eliminarButton = async () => {
    try {
      await axios.delete(`https://localhost:7268/api/Alumnos/${id}`)
      swal.fire({
        text: "El alumno se ha eliminado correctamente",
        icon: "success",
        timer: 1000
      }).then(res => {
        navigate('/alumnos');
      })
    } catch (error) {
      swal.fire({
        title: "Opss...",
        text: error.response.data,
        icon: "error",
      })
    }
  }

  return (
    <div className='contenido'>
      <div className='detalles'>
        <h1 className='tituloNombre'>Infomación Alumno</h1>
        {/* <h5 className="infoH5">Datos</h5> */}
        <hr />
        <div className='orgFlex'>
          <div className='infoAlumno'>
            <p className='textInfoAlumno'><strong>Id: </strong> {alumnos.infoAlumno && alumnos.infoAlumno.id}</p>
            <p className='textInfoAlumno'><strong>Nombre: </strong> {alumnos.infoAlumno && `${alumnos.infoAlumno.nombre} ${alumnos.infoAlumno.apellido}`}</p>
            <p className='textInfoAlumno'><strong>Semestre: </strong> {alumnos.infoAlumno && alumnos.infoAlumno.semestre}</p>
            <p className='textInfoAlumno'><strong>Creditos Matriculados: </strong> {alumnos.infoAlumno && alumnos.infoAlumno.credtDisp}</p>
            <p className='textInfoAlumno'><strong>Facultad: </strong> {alumnos.infoAlumno && alumnos.infoAlumno.idDeptNavigation.name}</p>
          </div>
          <div className='btnsAlumnos'>
            <Button variant="primary" onClick={editarButton} className="btnEditDelet">Editar</Button>{' '}
            <Button variant="danger" onClick={eliminarButton} className="btnEditDelet">Eliminar</Button>{' '}
          </div>
        </div>
        <div className='cursosSection'>
          <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
            <Tab eventKey="one" title="Cursos Matriculados" className='tabs table-responsive'>
              <DataCursoMatriculados datos={alumnos.infoAlumno && alumnos.cursosMatriculados} />
            </Tab>
            <Tab eventKey="two" title="Cursos Realizados" className='tabs table-responsive'>
              <DataCursosRealizados datos={alumnos.infoAlumno && alumnos.cursoRealizados} />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className='opciones'>
        {formActive && <FormAlumno datosCurso={alumnos.infoAlumno && alumnos} />}
      </div>
    </div>
  )
}

export default Alumno