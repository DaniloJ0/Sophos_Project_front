import React, {useEffect, useState } from 'react'
import axios from 'axios'

function Facultades() {
  const [facultades, setFacultades ] = useState([])
  useEffect(()=>{
    const getFacultades = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Facultades`)
            const {data} =  response
            setFacultades(data)
          } catch (error) {
            console.log(error)
        }
    }
    getFacultades()
  }, [])

  return (
    <div>Facultades</div>
  )
}

export default Facultades