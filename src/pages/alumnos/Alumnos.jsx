import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FormAlumnoDesp from '../../components/Alumnos/popUpAlumno/FormAlumnoDesp';
import BuscadorAlumno from '../../components/Alumnos/buscadorAlumno/BuscadorAlumno';
import "../cursos/cursos.css"


function Alumnos() {
const [createOn, setCreateCourse] = useState(false) 
 //Falso -> True -> Muestra -> Cierra -> True 
  const editarButton = ()=> {
    setCreateCourse(!createOn)
    //Pasar info al formulario
  }
  return (
    <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle'>Alumnos</h3>
                    <div className='buscador'>
                        <BuscadorAlumno/> 
                        <div>
                            <hr/>
                            {/* <SwitchesCurso/> */}
                            filtro por facultades
                            <div className='btnCrearCurso'>
                                <Button variant="outline-dark" onClick={editarButton}>Crear alumno </Button>
                            </div>
                             {createOn && <FormAlumnoDesp/>}
                        </div>       
                    </div>
                </div>
            </div>
            <div>
                    Tabla
            </div>
        </div>
  )
}

export default Alumnos