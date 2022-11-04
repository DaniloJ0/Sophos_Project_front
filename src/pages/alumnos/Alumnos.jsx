import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FormAlumnoDesp from '../../components/Alumnos/popUpAlumno/FormAlumnoDesp';
import "../cursos/cursos.css"
import "./alumnos.css"

function Alumnos() {
    const [createOn, setCreateCourse] = useState(false)
    const [search, setSearch] = useState("")
    const [alumnos, setAlumnos] = useState([])
    const [facultades, setFacultades] = useState([])
    const [facultadesFilter, setfacultadesFilter] = useState("")
    const editarButton = () => setCreateCourse(!createOn)

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

    useEffect(() => {
        const getFacultades = async () => {
            try {
                const response = await axios.get(`https://localhost:7268/api/Facultades`)
                const { data } = response
                setFacultades(data)
            } catch (error) {
                console.log(error)
            }
        }
        getFacultades()
    }, [])

    const filterFacu = (e) => {
        setfacultadesFilter(e.target.value)
    }

    const searchAlumnos = (e) => setSearch(e.target.value)
    const removeAccents = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const searched = !search && facultadesFilter===""
        ? alumnos
        : search && facultadesFilter===""
        ? alumnos.filter(alum => removeAccents(`${alum.nombre} ${alum.apellido}`).includes(search.toLowerCase()))
        : alumnos.filter(alum => alum.idDeptNavigation.name === facultadesFilter)

    return (
        <div className='designCursos'>
            <div className='filterCurso'>
                <div className='searchSection'>
                    <h3 className='filterTitle fw-bold'>Alumnos</h3>
                    <div className='buscador'>
                        <Form className="buscador">
                            <Form.Control
                                type="search"
                                placeholder="Buscar alumno"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={searchAlumnos}
                            />
                        </Form>
                        <div>
                            <hr />
                            <div className='text-center '>
                                <span className='fw-bold'> Filtrar por facultades</span>
                                <div className='mt-3'>
                                    <Form.Group className="mb-3" controlId="idDept">
                                        <Form.Select aria-label="Default select example"
                                            defaultValue={facultadesFilter}
                                            onChange={filterFacu}>
                                            {facultades && facultades.map((facu, index) => {
                                                return (<option key={index}> {facu.name}</option>)
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <Button variant="danger" onClick={() => setfacultadesFilter("")}>Limpiar filtro </Button>
                            </div>
                            <hr />
                            <div className='btnCrearCurso'>
                                <Button variant="outline-dark" onClick={editarButton}>Crear alumno </Button>
                            </div>
                            {createOn && <FormAlumnoDesp facultades={facultades} />}
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
                                alumnos && searched.map((alum, index) => {
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