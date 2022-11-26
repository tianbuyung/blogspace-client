import React from "react";
import { NavBarComponent } from "@components/index";
import { Button, Form } from "react-bootstrap";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <NavBarComponent />
      <main className={`${classes.main} text-center`}>
        <div className={`${classes.form} w-100 m-auto`}>
          <h3 className="h3 mb-3 fw-normal">Please sign in</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please enter your password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
