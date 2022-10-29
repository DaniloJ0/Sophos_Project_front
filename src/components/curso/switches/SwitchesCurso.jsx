import Form from 'react-bootstrap/Form';
import "./switchesCurso.css"

function SwitchesCurso() {
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="cupos"
        label="Cursos con cupos"
        className='checks'
      />
        <Form.Check 
            type="switch"
            id="porNombre"
            label="Orden ascendente"
            className='checks'
        />
      </Form>
    )
}

export default SwitchesCurso