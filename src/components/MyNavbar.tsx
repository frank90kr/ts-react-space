import { Container, Nav, Navbar } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand>SPACEFLIGHT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
