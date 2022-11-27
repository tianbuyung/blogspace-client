import BaseService from "./baseService";

export default class TodoListService extends BaseService {
  getTodoListByUserId = async () => {
    const options = {
      method: "GET",
    };

    const fetchData = { url: "/todo-list", options, authenticate: true };

    return await this.fetch(fetchData);
  };

  addTodoList = async (data: AddTodoData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const fetchData = { url: "/todo-list", options, authenticate: true };

    return await this.fetch(fetchData);
  };

  editTodoList = async (data: any, id: number) => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ todo: data.editTodo }),
    };

    const fetchData = {
      url: `/todo-list/${id}`,
      options,
      authenticate: true,
    };

    return await this.fetch(fetchData);
  };

  deleteTodoList = async (id: number) => {
    const options = {
      method: "DELETE",
    };

    const fetchData = {
      url: `/todo-list/${id}`,
      options,
      authenticate: true,
    };

    return await this.fetch(fetchData);
  };
}

interface AddTodoData {
  todo: string;
}
