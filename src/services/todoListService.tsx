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

  editTodoList = async (data: EditTodoData) => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ todo: data.todo }),
    };

    const fetchData = {
      url: `/todo-list/${data.id}`,
      options,
      authenticate: true,
    };

    return await this.fetch(fetchData);
  };
}

interface AddTodoData {
  todo: string;
}

interface EditTodoData {
  id: number;
  todo: string;
}
