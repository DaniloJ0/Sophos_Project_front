import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
// import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';
import FormAlumnoDesp from '../../components/Alumnos/popUpAlumno/FormAlumnoDesp';
import BuscadorAlumno from '../../components/Alumnos/buscadorAlumno/BuscadorAlumno';
import "../cursos/cursos.css"
import "./alumnos.css"

function Alumnos() {
    const [createOn, setCreateCourse] = useState(false)
    const [alumnos, setAlumnos] = useState([])
    //Falso -> True -> Muestra -> Cierra -> True 
    const editarButton = () => {
        setCreateCourse(!createOn)
        //Pasar info al formulario
    }
    const getAlumnos = async () => {
        try {
            const response = await axios.get("https://localhost:7268/api/Alumnos")
            const { data } = response
            setAlumnos(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAlumnos()
    }, [])

    return (
        <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle'>Alumnos</h3>
                    <div className='buscador'>
                        <BuscadorAlumno />
                        <div>
                            <hr />
                            {/* <SwitchesCurso/> */}
                            filtro por facultades
                            <div className='btnCrearCurso'>
                                <Button variant="outline-dark" onClick={editarButton}>Crear alumno </Button>
                            </div>
                            {createOn && <FormAlumnoDesp />}
                        </div>
                    </div>
                </div>
            </div>
            <div className='table-responsive tableProps'>
                {alumnos && alumnos.length === 0 ?
                    <p className='mensaje'>No hay ningun alumno </p> :
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr className='tableDesign'>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Semestre</th>
                                <th>Facultad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alumnos && alumnos.map((alum, index) => {
                                    return (
                                        <tr key={index} className='tableDesign'>
                                            <td><a href={`/alumnos/${alum.id}`} className='linkId' ><strong>{alum.id}</strong></a></td>
                                            <td>{alum.nombre} </td>
                                            <td>{alum.apellido}</td>
                                            <td>{alum.semestre}</td>
                                            <td>{alum.idDeptNavigation.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>}
            </div>
        </div>
    )
}

export default Alumnos