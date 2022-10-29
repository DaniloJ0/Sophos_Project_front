import React from 'react'
import Buscador from '../../components/buscador/Buscador'
import SingleCurso from '../../components/curso/singleCurso/SingleCurso'
import SwitchesCurso from '../../components/curso/switches/SwitchesCurso'
import Button from 'react-bootstrap/Button';
import "./cursos.css"

function Cursos() {
  return (
    <>
        <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle'>Menu</h3>
                    <div className='buscador'>
                        <Buscador/> 
                        <div>
                            <hr/>
                            <SwitchesCurso/>
                            <div className='btnCrearCurso'>
                                <Button variant="outline-dark" >Crear curso </Button>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            <div className='cursosFlex'>
                <SingleCurso/>
                <SingleCurso/>
                <SingleCurso/>
                <SingleCurso/>
                <SingleCurso/>
                <SingleCurso/>
            </div>
        </div>
    </>
    )
}


export default Cursos