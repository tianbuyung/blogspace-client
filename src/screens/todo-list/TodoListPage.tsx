import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { NavBarComponent } from "@components/index";
import { useAppSelector, useAppDispatch } from "@hooks/reduxHooks";
import TodoListService from "services/todoListService";
import { getTodoList } from "@store/todo";
import TodoListBody from "./components/TodoListBody";

const todoListService = new TodoListService();

const TodoListPage = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const getAllTodoList = async () => {
      try {
        const response = await todoListService.getTodoListByUserId();
        dispatch(getTodoList(response.data));
      } catch (error) {
        // silent
      }
    };

    getAllTodoList();
  }, [dispatch]);

  return (
    <div>
      <NavBarComponent />
      <TodoListBody />
    </div>
  );
};

export default TodoListPage;
