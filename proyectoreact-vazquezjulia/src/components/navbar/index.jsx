import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cartwidget from '../Cartwidget/index';

function navbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Uva y cuajo - Eventos y vinos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> Inicio </Nav.Link>
            <Nav.Link href="#features">Eventos</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <cartwidget></cartwidget>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;