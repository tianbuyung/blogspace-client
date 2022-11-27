import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import TodoListService from "@services/todoListService";

const todoListService = new TodoListService();

const EditTodo = ({ todo, setIsFetching }: EditTodoProps) => {
  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const editTodoHandler = async (event: any) => {
    event.preventDefault();

    const data = {
      editTodo,
    };

    const response = await todoListService.editTodoList(data, todo.id);
    if (response.code === 200) {
      alert(response.data.message);
      setShowModal(false);
      setIsFetching(true);
    } else {
      alert(response.errors.message);
    }
  };

  const todoChangeHandler = (event: any) => {
    setEditTodo(event.target.value);
  };

  return (
    <>
      <i
        className="bi bi-pencil-square mx-3"
        style={{ cursor: "pointer" }}
        onClick={handleOpenModal}
      />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={editTodoHandler}>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>You can edit your todo here:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={todo.todo}
                onChange={todoChangeHandler}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              type="button"
              onClick={handleCloseModal}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

interface EditTodoProps {
  todo: any;
  setIsFetching: any;
}

export default EditTodo;
