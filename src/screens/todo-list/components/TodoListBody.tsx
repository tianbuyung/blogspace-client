import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";

import { useAppSelector } from "@hooks/reduxHooks";

const TodoListBody = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);

  return (
    <Container className="mt-5 text-center">
      <h1>
        Todo List <i className="bi bi-plus-circle"></i>
      </h1>
      <ListGroup variant="flush" className="mt-5">
        {todoList.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between"
          >
            <Form.Check type="checkbox" id="checkbox" label={todo.todo} />
            <div>
              <i className="bi bi-pencil-square mx-3" />
              <i className="bi bi-trash3-fill" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoListBody;
