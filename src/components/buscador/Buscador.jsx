import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./buscador.css"

function Buscador() {
  return (
    <Form className="buscador">
            <Form.Control
              type="search"
              placeholder="Buscar curso"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='btnFormBuscar'>Buscar</Button>
    </Form>
  )
}

export default Buscador