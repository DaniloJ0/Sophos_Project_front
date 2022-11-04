import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleCurso from '../../components/curso/singleCurso/SingleCurso'
import Button from 'react-bootstrap/Button';
import FormCurso from '../../components/curso/formCurso/FormCurso';
import Form from 'react-bootstrap/Form';
import "./cursos.css"

function Cursos() {
    const [createOn, setCreateCourse] = useState(false)
    const [curso, setCursos] = useState([])
    const [search, setSearch] = useState("")
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const editarButton = () => {
        setCreateCourse(!createOn)
    }

    const getCursos = async () => {
        try {
            const response = await axios.get("https://localhost:7268/api/Cursos")
            const { data } = response
            setCursos(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCursos()
    }, [])

    const searchCursos = (e) => setSearch(e.target.value)
    const removeAccents = (str) =>  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const searched = !search && !isSwitchOn
        ?curso 
        : search && !isSwitchOn
        ? curso.filter(cur =>removeAccents(cur.nombre).includes(search.toLowerCase()))
        : curso.filter(cur =>removeAccents(cur.nombre).includes(search.toLowerCase()))
               .filter(cur => cur.cupos>0)

    const onSwitchAction = () => {
        setIsSwitchOn(!isSwitchOn);
    };
    return (
        <>
            <div className='designCursos'>
                <div className='filterCurso'>
                    <div className='searchSection'>
                        <h3 className='filterTitle'>Cursos</h3>
                        <div className='buscador'>
                            <Form className="buscador">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar curso"
                                    className="me-2"
                                    aria-label="Search"
                                    value={search}
                                    onChange={searchCursos}
                                />
                            </Form>
                            <div>
                                <hr />
                                <Form>
                                    <Form.Check
                                        onChange={onSwitchAction}
                                        type="switch"
                                        id="cupos"
                                        label="Cursos con cupos"
                                        className='checks'
                                        checked={isSwitchOn}
                                    />
                                </Form>
                                <div className='btnCrearCurso'>
                                    <Button variant="dark" onClick={editarButton}>Crear curso </Button>
                                </div>
                                {createOn && <FormCurso />}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cursosFlex'>
                        {searched.map((course, index) => {
                            return (
                                <div key={index} className="cardSingle">
                                    <a href={`cursos/${course.id}`} className="cursoLink">
                                        <SingleCurso dataCurso={course} />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cursos