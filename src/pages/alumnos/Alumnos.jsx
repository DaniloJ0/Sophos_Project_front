import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';
import FormAlumnoDesp from '../../components/Alumnos/popUpAlumno/FormAlumnoDesp';
import BuscadorAlumno from '../../components/Alumnos/buscadorAlumno/BuscadorAlumno';
import "../cursos/cursos.css"
import "./alumnos.css"

function Alumnos() {
const [createOn, setCreateCourse] = useState(false) 
 //Falso -> True -> Muestra -> Cierra -> True 
  const editarButton = ()=> {
    setCreateCourse(!createOn)
    //Pasar info al formulario
  }
//   const [alumnos, setAlumnos ] = useState([])
//   const getAlumnos = async () =>{
//        try {
//           const response = await axios.get("https://localhost:7268/api/Alumnos")
//           const {data} =  response
//           setAlumnos(data)
//         } catch (error) {
//           console.log(error)
//        }
//   }
//   useEffect(()=>{
//       getAlumnos()
//   }, [])



  const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,

    },
    {
        name: 'Nombre',
        selector: row => row.year,
        sortable: true,
    },
    {
        name: 'Semestre',
        selector: row => row.year,
        sortable: true,
    },
    {
        name: 'Facultad',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',

    },
    {
        id: 2,
        title: 'Ghostbustersssssssssssssss',
        year: '1984',
    },
]

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
            <div className='tableProps'>
                <DataTable
                    columns={columns}
                    data={data}
                    title="Alumnos"
                    pagination
                />
            </div>
        </div>
  )
}

export default Alumnos