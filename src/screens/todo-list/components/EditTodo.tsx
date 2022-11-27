import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { toggleEditTodo } from "@store/ui";
import TodoListService from "@services/todoListService";

const todoListService = new TodoListService();

const EditTodo = ({ id }: EditTodoProps) => {
  const [todo, setTodo] = useState("");
  const showModal = useAppSelector((state) => state.ui.editTodoVisible);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleEditTodo());
  };

  const editTodoHandler = async (event: any) => {
    event.preventDefault();

    const data = {
      id,
      todo,
    };

    const response = await todoListService.editTodoList(data);
    if (response.code === 200) {
      dispatch(toggleEditTodo());
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
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={editTodoHandler}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>You can edit your todo here:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={todoChangeHandler} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

interface EditTodoProps {
  id: number;
}

export default EditTodo;
