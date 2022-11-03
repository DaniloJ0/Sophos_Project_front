import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./profesores.css"
import FormProfesores from '../../components/profesor/formProfesores/FormProfesores';


function Profesores() {
  const [profesores, setProfesores ] = useState([])
  const [createOn, setCreateCourse] = useState(false)
  const editarButton = () => {
    setCreateCourse(!createOn)
    //Pasar info al formulario
}
  useEffect(()=>{
    const getProfesores = async () =>{
        try {
            const response = await axios.get(`https://localhost:7268/api/Profesores`)
            const {data} =  response
            console.log(data)
            setProfesores(data)
          } catch (error) {
            console.log(error)
        }
    }
    getProfesores()
  }, [])
  
  
  return (
      <div className='flexProfesor'>
        <div className='searchBar'>
            <div className="searchSection">
                <h3 className='mensaje my-4'>Profesores</h3>
                <Form className="buscador">
                    <Form.Control
                    type="search"
                    placeholder="Buscar profesor"
                    className="me-2 my-1"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='btnFormBuscar'>Buscar</Button>
                </Form>
                <hr/>
            
                <div className='text-center my-4'>
                    <Button variant="dark" onClick={editarButton}>Crear profesor </Button>
                </div>
                {createOn && <FormProfesores />}
            </div>          
        </div>
        <div className='table-responsive tableProps  tableProf '>
                {profesores && profesores.length === 0 ?
                    <p className='mensaje'>No hay ningún profesor </p> :
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr className='tableDesign'>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Facultad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                profesores && profesores.map((prof, index) => {
                                    return (
                                        <tr key={index} className='tableDesign'>
                                            <td><a href={`/profesores/${prof.id}`} className='linkId' ><strong>{prof.id}</strong></a></td>
                                            <td>{prof.nombre} </td>
                                            <td>{prof.apellido}</td>
                                            <td>{prof.email}</td>
                                            <td>{prof.idDeptNavigation.name}</td>
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

export default Profesores