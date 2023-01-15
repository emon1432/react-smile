import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            React Smile
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/careers">
              Careers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;
