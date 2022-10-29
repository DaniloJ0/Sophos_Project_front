import { useParams } from "react-router-dom"
import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

// import FormAlumno from '../formAlumno/FormAlumno'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import "./curso.css"
import AlumTableCurso from "../../components/curso/tablaCursoAlum/AlumTableCurso";
import FormEditCurso from "../../components/curso/formEditCurso/FormEditCurso";

function Curso() {
  const [formActive, setFormAct] = useState(false)
  const {id} = useParams()
  const editarButton = ()=> {
    setFormAct(!formActive)
  }

  //const eliminaAlumno 

  const eliminarButton = ()=> {
      swal({
        title: "Eliminar Curso",
        text: '¿Está seguro que desea eliminar el curso?',
        icon: "warning",
        buttons: ["Cancelar", "Aceptar"]
      }).then(res =>{
        if(res){
          swal({text: "El curso se ha eliminado correctamente",
          icon: "success"
        })
        }
      })
  }

  return (
    <div className='contenido'>
      <div className='detalles'>
        <h1 className='tituloNombre'>Programación orientada a objetos</h1>
        <h5 className="infoH5">Infomación</h5>
        <hr/>
        <div className='orgFlex'>
          <div className='infoAlumno'>
            <p className='textInfoAlumno'><strong>Profesor:</strong> Sin asignar</p>
            <p className='textInfoAlumno'><strong>Creditos:</strong> 6 </p>
            <p className='textInfoAlumno'><strong>Cupos:</strong> 50</p>
            <p className='textInfoAlumno'><strong>Pre-requisito:</strong> Este curso no cuenta con pre-requisito </p>
            <p className='textInfoAlumno'><strong>Periodo:</strong> 2022-2</p>
          </div>
          <div className='btnsAlumnos'>
            <Button variant="primary" onClick={editarButton}>Editar</Button>{' '}
            <Button variant="danger" onClick={eliminarButton}>Eliminar</Button>{' '}
          </div>
          {formActive && <FormEditCurso/>}
        </div>
        <div>
          <Tabs >
            <Tab eventKey="one" title="Alumnos Matriculados " className='tabs'>
                <AlumTableCurso/>
            </Tab>
          </Tabs>
          </div>
      </div>
    </div>
  )
}

export default Curso