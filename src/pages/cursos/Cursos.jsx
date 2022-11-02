import React, {useEffect, useState } from 'react'
import axios from 'axios'
import BuscadorCurso from '../../components/curso/buscadorCurso/BuscadorCurso'
import SingleCurso from '../../components/curso/singleCurso/SingleCurso'
import SwitchesCurso from '../../components/curso/switches/SwitchesCurso'
import Button from 'react-bootstrap/Button';
import FormCurso from '../../components/curso/formCurso/FormCurso';
import "./cursos.css"


function Cursos() {
  const [createOn, setCreateCourse] = useState(false) 
  const [curso, setCursos ] = useState([])
 //Falso -> True -> Muestra -> Cierra -> True 
  const editarButton = ()=> {
    setCreateCourse(!createOn)
    //Pasar info al formulario
  }

const getCursos = async () =>{
    try {
       const response = await axios.get("https://localhost:7268/api/Cursos")
       const {data} =  response
       setCursos(data)
     } catch (error) {
       console.log(error)
    }
}
useEffect(()=>{
   getCursos()
}, [])

  return (
    <>
        <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle'>Cursos</h3>
                    <div className='buscador'>
                        <BuscadorCurso/> 
                        <div>
                            <hr/>
                            <SwitchesCurso/>
                            <div className='btnCrearCurso'>
                                <Button variant="dark" onClick={editarButton}>Crear curso </Button>
                            </div>
                             {createOn && <FormCurso/>}
                        </div>       
                    </div>
                </div>
            </div>
            <div>
                <div className='cursosFlex'>
                    {curso.map((course, index) => {
                        return (
                            <div key={index} className="cardSingle">
                                <a href={`cursos/${course.id}`} className="cursoLink">
                                    <SingleCurso dataCurso={course}/>
                                </a>
                            </div>
                        )
                    })}                
                </div>
            </div>
        </div>
    </>
    )
}


export default Cursos