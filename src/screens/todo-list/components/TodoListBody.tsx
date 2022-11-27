import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";

import { useAppSelector } from "@hooks/reduxHooks";
import AddTodoButton from "@screens/todo-list/components/AddTodoButton";
import AddTodo from "@screens/todo-list/components/AddTodo";
import TodoListService from "@services/todoListService";
import EditTodo from "@screens/todo-list/components/EditTodo";

const todoListService = new TodoListService();

const TodoListBody = ({ setIsFetching }: TodoListBodyProps) => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const showAddTodo = useAppSelector((state) => state.ui.addTodoVisible);

  const deleteTodoHandler = async (id: number) => {
    if (window.confirm(`Are you sure you want to delete this todo?`)) {
      const response = await todoListService.deleteTodoList(id);
      alert(response.data.message);
      setIsFetching(true);
    }
  };

  return (
    <Container className="mt-5 text-center">
      <h1>
        Todo List <AddTodoButton />
      </h1>
      {showAddTodo && <AddTodo setIsFetching={setIsFetching} />}
      <ListGroup variant="flush" className="mt-5">
        {todoList.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between"
          >
            <Form.Check type="checkbox" id="checkbox" label={todo.todo} />
            <div>
              <EditTodo todo={todo} setIsFetching={setIsFetching} />
              <i
                className="bi bi-trash3-fill"
                style={{ cursor: "pointer" }}
                onClick={() => deleteTodoHandler(todo.id)}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

interface TodoListBodyProps {
  setIsFetching: any;
}

export default TodoListBody;
