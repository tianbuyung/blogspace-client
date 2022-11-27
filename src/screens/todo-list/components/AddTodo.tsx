import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { toggleAddTodo } from "@store/ui";
import TodoListService from "@services/todoListService";

const todoListService = new TodoListService();

const AddTodo = ({ setIsFetching }: AddTodoListProps) => {
  const [todo, setTodo] = useState("");
  const showModal = useAppSelector((state) => state.ui.addTodoVisible);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleAddTodo());
  };

  const addTodoHandler = async (event: any) => {
    event.preventDefault();

    const body = {
      todo,
    };

    const response = await todoListService.addTodoList(body);
    if (response.code === 200) {
      dispatch(toggleAddTodo());
      setIsFetching(true);
    } else {
      alert(response.errors.message);
    }
  };

  const todoChangeHandler = (event: any) => {
    setTodo(event.target.value);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={addTodoHandler}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>What is your next todo?</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={todoChangeHandler} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add Todo
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

interface AddTodoListProps {
  setIsFetching: any;
}

export default AddTodo;
