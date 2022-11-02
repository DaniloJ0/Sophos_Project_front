import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Tab, Tabs } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import FormEditPro from '../../components/profesor/formEditProfesores/FormEditPro';
import TablaCursoPro from '../../components/profesor/tablaCursoPro/TablaCursoPro';

function Profesor() {
  const {id} = useParams()
  const [profesores, setProfesores ] = useState([])
  const [formActive, setFormAct] = useState(false)

  useEffect(()=>{
    const getProfesores = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Profesores/${id}`)
            const {data} =  response
            setProfesores(data)
          } catch (error) {
            console.log(error)
        }
    }
    getProfesores()
  }, [])  



  const editarButton = ()=> {
    setFormAct(!formActive)
  }

  const eliminarButton = ()=> {}

  return (
    <div className='contenido'>
        <div className='detalles'>
          <h1 className='tituloNombre'>{ profesores && `${ profesores.nombre} ${profesores.apellido}` }</h1>
          {/* <h5 className="infoH5">Datos</h5> */}
          <hr/>
          <div className='orgFlex'>
            <div className='infoAlumno'>
              <p className='textInfoAlumno'><strong>Id: </strong> {profesores && profesores.id}</p>
              <p className='textInfoAlumno'><strong>Email: </strong> {profesores && profesores.email}</p>
              <p className='textInfoAlumno'><strong>Máximo título: </strong> {profesores && profesores.maxTitulo}</p>
              <p className='textInfoAlumno'><strong>Años de experiencia: </strong> {profesores && profesores.expYear}</p>
              <p className='textInfoAlumno'><strong>Facultad: </strong> {profesores.idDeptNavigation && profesores.idDeptNavigation.name}</p>
            </div>
            <div className='btnsAlumnos'>
              <Button variant="primary" onClick={editarButton} className="btnEditDelet">Editar</Button>{' '}
              <Button variant="danger" onClick={eliminarButton} className="btnEditDelet">Eliminar</Button>{' '}
            </div>
          </div>
          <div className='cursosSection'>
            <Tabs>
              <Tab eventKey="one" title="Cursos Impartidos" className='tabs'>
                <TablaCursoPro datosCurso={profesores && profesores.cursos}/>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='opciones'>
          {formActive && <FormEditPro dataProf={profesores}/>}
        </div>
      </div>
    
    
  )
}

export default Profesor