import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAlumno() {
  return (
    <Form>
      <Form.Label>Nombre</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingresa el nombre" value="Rafael" />
      </Form.Group>

      <Form.Label>Apellido</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingresa el apellido" value="Nadal" />
      </Form.Group>

      {/* <Form.Label>Departmento</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="ingresa nombre" value="Informatica" />
      </Form.Group> */}
      <div className="">
        <Form.Label>Departmento</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select aria-label="Default select example">
            <option>Informatica</option> 
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </div>
      
      <Button variant="primary" type="submit">
        Editar
      </Button>
    </Form>
  );
}

export default FormAlumno;