import React, { useState } from 'react'
import Buscador from '../../components/buscador/Buscador'
import SingleCurso from '../../components/curso/singleCurso/SingleCurso'
import SwitchesCurso from '../../components/curso/switches/SwitchesCurso'
import Button from 'react-bootstrap/Button';
import "./cursos.css"
import FormCurso from '../../components/curso/formCurso/FormCurso';
import { Link } from 'react-router-dom';
function Cursos() {
  const [createOn, setCreateCourse] = useState(false) 
 //Falso -> True -> Muestra -> Cierra -> True 
  const editarButton = ()=> {
    setCreateCourse(!createOn)
    //Pasar info al formulario
  }
  const curse = [1,2,3,4,5,6]

  return (
    <>
        <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle'>Cursos</h3>
                    <div className='buscador'>
                        <Buscador/> 
                        <div>
                            <hr/>
                            <SwitchesCurso/>
                            <div className='btnCrearCurso'>
                                <Button variant="outline-dark" onClick={editarButton}>Crear curso </Button>
                            </div>
                             {createOn && <FormCurso/>}
                        </div>       
                    </div>
                </div>
            </div>
            <div className='cursosFlex'>
                {curse.map((course, index) => {
                    return (
                        <a key={index+1} href={`cursos/${index}`} className="cursoLink">
                            <SingleCurso cursoId={index}/>
                        </a>
                    )
                })}                
            </div>
        </div>
    </>
    )
}


export default Cursos