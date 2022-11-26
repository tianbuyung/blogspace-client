import React, { useState } from "react";
import { NavBarComponent } from "@components/index";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";

import classes from "./LoginPage.module.css";
import AuthService from "services/authService";
import { setUser } from "@store/auth";
import { useAppDispatch } from "@hooks/reduxHooks";

const authService = new AuthService();

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const LoginHandler = async (event: any) => {
    event.preventDefault();

    const body = {
      username,
      password,
    };
    const response = await authService.login(body);
    if (response.code === 200) {
      localStorage.setItem("token", response.data.token);
      dispatch(setUser());
      router.push("/");
    } else {
      alert(response.errors.message);
    }
  };

  const usernameChangeHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <NavBarComponent />
      <main className={`${classes.main} text-center`}>
        <div className={`${classes.form} w-100 m-auto`}>
          <h3 className="h3 mb-3 fw-normal">Please sign in</h3>
          <Form onSubmit={LoginHandler}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your username"
                onChange={usernameChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please enter your password"
                autoComplete="on"
                onChange={passwordChangeHandler}
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
