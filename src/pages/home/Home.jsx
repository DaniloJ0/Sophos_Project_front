import React, {useEffect, useState } from 'react'
import axios from 'axios'
import homeImage from '../../img/womenBook.jpg'
import CardHome from '../../components/cardHome/CardHome'
import './home.css'
import Footer from '../../components/footer/Footer'

function Home() {
  const [alumnos, setAlumnos ] = useState([])
  const [facultades, setFacultades ] = useState([])
  const [profesores, setProfesores ] = useState([])
  const [cursos, setCursos ] = useState([])

  useEffect(()=>{
  const getAlumnos = async () =>{
       try {
          const response = await axios.get("https://localhost:7268/api/Alumnos")
          const {data} =  response
          setAlumnos(data)
        } catch (error) {
          console.log(error)
       }
  }
      getAlumnos()
  }, [])

  useEffect(()=>{
    const getAlumnos = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Facultades`)
            const {data} =  response
            setFacultades(data)
          } catch (error) {
            console.log(error)
        }
    }
    getAlumnos()
  }, [])

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

  const EstdsAlumnos = {
    title: "Alumnos",
    mount: alumnos.length,
    desc: ""
  } 
  const EstdsFaculta = {
    title: "Facultades",
    mount: facultades.length,
    desc: ""
  } 
  const EstdsProfesores = {
    title: "Profesores",
    mount: profesores.length,
    desc: ""
  } 
  const EstdsCursos= {
    title: "Cursos",
    mount: cursos.length,
    desc: ""
  } 

  return (
    <>
      <div>
        <img src={homeImage} alt="FondoHome" className='homePhoto'/>
      </div>
      <div className='flexHome'>
        <CardHome info={EstdsAlumnos}/>
        <CardHome info={EstdsFaculta}/>
        <CardHome info={EstdsProfesores}/>
        <CardHome info={EstdsCursos}/>
      </div>
    <Footer/>
    </>
  )
}

export default Home