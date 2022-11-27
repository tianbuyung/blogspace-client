import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";

import { useAppSelector } from "@hooks/reduxHooks";
import AddTodoButton from "@screens/todo-list/components/AddTodoButton";
import AddTodo from "@screens/todo-list/components/AddTodo";
import EditTodo from "@screens/todo-list/components/EditTodo";
import EditTodoButton from "@screens/todo-list/components/EditTodoButton";

const TodoListBody = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const showAddTodo = useAppSelector((state) => state.ui.addTodoVisible);
  const showEditTodo = useAppSelector((state) => state.ui.editTodoVisible);

  return (
    <Container className="mt-5 text-center">
      <h1>
        Todo List <AddTodoButton />
      </h1>
      {showAddTodo && <AddTodo />}
      <ListGroup variant="flush" className="mt-5">
        {todoList.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between"
          >
            <Form.Check type="checkbox" id="checkbox" label={todo.todo} />
            <div>
              <EditTodoButton />
              {showEditTodo && <EditTodo id={todo.id} />}
              <i className="bi bi-trash3-fill" style={{ cursor: "pointer" }} />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoListBody;
