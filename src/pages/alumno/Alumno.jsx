import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Contenido from '../../components/Alumnos/contenido/Contenido'

function Alumno() {
    const [alumnos, setAlumnos ] = useState([])
    const getAlumnos = async () =>{
         try {
            const response = await axios.get("https://localhost:7268/api/Alumnos")
            const {data} =  response
            setAlumnos(data)
          } catch (error) {
            console.log(error)
         }
    }
    useEffect(()=>{
        getAlumnos()
    }, [])
    
  return (
    <>
        <Contenido/>
    </>
  )
}

export default Alumno