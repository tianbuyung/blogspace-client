import React from "react";
import { Button } from "react-bootstrap";

import { useAppDispatch } from "@hooks/reduxHooks";
import { toggleAddTodo } from "@store/ui";

const AddTodoButton = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(toggleAddTodo());
  };

  return (
    <i
      className="bi bi-plus-circle"
      style={{ cursor: "pointer" }}
      onClick={handleOpenModal}
    />
  );
};

export default AddTodoButton;
