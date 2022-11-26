import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";

import { NavBarComponent } from "@components/index";
import AuthService from "services/authService";

import classes from "./RegisterPage.module.css";

const authService = new AuthService();

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const registerHandler = async (event: any) => {
    event.preventDefault();

    const body = {
      username,
      email,
      password,
      confirmPassword,
    };
    const response = await authService.register(body);
    if (response.code === 200) {
      alert(response.data.message);
      router.push("/login");
    } else {
      alert(response.errors.message);
    }
  };

  const usernameChangeHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <NavBarComponent />
      <main className={`${classes.main} text-center`}>
        <div className={`${classes.form} w-100 m-auto`}>
          <h3 className="h3 mb-3 fw-normal">Register</h3>
          <Form onSubmit={registerHandler}>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={usernameChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email Address"
                onChange={emailChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="on"
                onChange={passwordChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                autoComplete="on"
                onChange={confirmPasswordChangeHandler}
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

export default RegisterPage;
