import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "@hooks/reduxHooks";
import { useAppDispatch } from "@hooks/reduxHooks";
import { logout } from "@store/auth";

function NavBarComponent() {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );
  const dispatch = useAppDispatch();

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {isAuthenticated && <Nav.Link href="/todo-list">Todo List</Nav.Link>}
        </Nav>
        {!isAuthenticated && (
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        )}
        {isAuthenticated && (
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
