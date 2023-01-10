import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#fff" }}>
          <Link to="/">React-Bootstrap</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#fff" }}>
              <Link to="/sobre">Sobre</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }}>
              <Link to="/contato">Contato</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }}>
              <Link to="/projetos">Projetos</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
