import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import "./navbar.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Universidas Sophos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='link' to='/cursos'>Cursos</Link></Nav.Link>
            <NavDropdown title="Personal" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/profesores'>Profesores</NavDropdown.Item>
              <NavDropdown.Item href='/alumnos'>Alumnos</NavDropdown.Item>
              <NavDropdown.Item href='/facultades'>Facultades</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;