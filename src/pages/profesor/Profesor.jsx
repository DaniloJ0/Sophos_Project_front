import React, {useEffect, useState } from 'react'
import axios from 'axios'

function Profesor() {
  const [profesores, setProfesores ] = useState([])
  useEffect(()=>{
    const getProfesores = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Profesores`)
            const {data} =  response
            setProfesores(data)
          } catch (error) {
            console.log(error)
        }
    }
    getProfesores()
  }, [])
  
  return (
    <div>Profesor</div>
  )
}

export default Profesor