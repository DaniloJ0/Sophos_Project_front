import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DataCurso from '../dataCurso/DataCurso'
import FormAlumno from '../formAlumno/FormAlumno'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';


import './contenido.css'
function Contenido() {
  const [tabKey, initTabKey] = useState('one')
  const [formActive, formAct] = useState(false)

  const editarButton = ()=> {
    formAct(!formActive)
    //Pasar info al formulario
  }

  //const eliminaAlumno 

  const eliminarButton = ()=> {
      swal({
        title: "Eliminar Alumno",
        text: '¿Está seguro que desea eliminar el alumno?',
        icon: "warning",
        buttons: ["Cancelar", "Aceptar"]
      }).then(res =>{
        if(res){
          swal({text: "El alumno se ha eliminado correctamente",
          icon: "success"
        })
        }
      })
  }

  return (
    <div className='contenido'>
      <div className='detalles'>
        <h1 className='tituloNombre'>Alumno</h1>
        <div className='orgFlex'>
          <div className='infoAlumno'>
            <p className='textInfoAlumno'><strong>Nombre:</strong> Rafael Nadal</p>
            <p className='textInfoAlumno'><strong>Semestre:</strong> 9</p>
            <p className='textInfoAlumno'><strong>Creditos Matriculados:</strong> 6</p>
            <p className='textInfoAlumno'><strong>Departamento:</strong> Informatica</p>
          </div>
          <div className='btnsAlumnos'>
            <Button variant="primary" onClick={editarButton}>Editar</Button>{' '}
            <Button variant="danger" onClick={eliminarButton}>Eliminar</Button>{' '}
          </div>
        </div>
        <div className='cursosSection'>
          <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
            <Tab eventKey="one" title="Cursos Matriculados" className='tabs'>
              <DataCurso/>
            </Tab>
            <Tab eventKey="two" title="Cursos Realizados" className='tabs'>
              <DataCurso/>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className='opciones' style={{display: formActive? 'block': 'none'}}>
        <h1 className='editarOpciones'>Editar</h1>
        <div className='formAlumno'>
          <FormAlumno/>
        </div>
      </div>
    </div>
  )
}

export default Contenido