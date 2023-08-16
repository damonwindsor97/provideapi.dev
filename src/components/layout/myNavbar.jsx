import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const myNavbar = () => {
  return (

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Provide</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Docs (soon)</Nav.Link>
      <Nav.Link href="#pricing">Discord Bot (soon) </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Bring ease to your cheating experience
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

  )
}

export default myNavbar
