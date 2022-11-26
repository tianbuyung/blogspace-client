import { Container, Nav, Navbar } from "react-bootstrap";

function NavBarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/todo-list">Todo List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
