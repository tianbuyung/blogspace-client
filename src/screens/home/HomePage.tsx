import React from "react";
import { NavBarComponent } from "@components/index";
import { Container } from "react-bootstrap";

import { useAppSelector } from "@hooks/reduxHooks";

import classes from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );

  return (
    <div>
      <NavBarComponent />
      <Container>
        <div
          className={`${classes["heading_container"]} ${classes["heading_center"]}`}
        >
          <h2>Welcome to Blog Space</h2>

          {!isAuthenticated && (
            <p>
              Please{" "}
              <Link href="/register" className="text-decoration-underline">
                register
              </Link>{" "}
              or{" "}
              <Link href="/login" className="text-decoration-underline">
                login
              </Link>{" "}
              and save your Todo List!
            </p>
          )}
          {isAuthenticated && (
            <p>
              You&apos;re login!! Let&apos;s check your{" "}
              <Link href="/todo-list" className="text-decoration-underline">
                todo list
              </Link>
              ...
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
