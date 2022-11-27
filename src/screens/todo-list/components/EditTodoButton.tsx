import React from "react";
import { Button } from "react-bootstrap";

import { useAppDispatch } from "@hooks/reduxHooks";
import { toggleEditTodo } from "@store/ui";

const EditTodoButton = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(toggleEditTodo());
  };

  return (
    <i
      className="bi bi-pencil-square mx-3"
      style={{ cursor: "pointer" }}
      onClick={handleOpenModal}
    />
  );
};

export default EditTodoButton;
