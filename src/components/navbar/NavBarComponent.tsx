import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "@hooks/reduxHooks";
import { logout } from "@store/auth";

function NavBarComponent() {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );
  const dispatch = useAppDispatch();

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} href="/">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={Link} href="/todo-list">
              Todo List
            </Nav.Link>
          )}
        </Nav>
        {!isAuthenticated && (
          <Nav>
            <Nav.Link as={Link} href="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} href="/register">
              Register
            </Nav.Link>
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
