import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"

function NavbarG() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Universidas Sophos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/cursos'>Cursos</Nav.Link>
            <Nav.Link href='/matricula'>Matricular</Nav.Link>
            <NavDropdown title="Personal" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/profesores'>Profesores</NavDropdown.Item>
              <NavDropdown.Item href='/alumnos'>Alumnos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarG;
