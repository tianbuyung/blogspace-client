import BaseService from "./baseService";

export default class TodoListService extends BaseService {
  getTodoListByUserId = async () => {
    const options = {
      method: "GET",
    };

    const fetchData = { url: "/todo-list", options, authenticate: true };

    return await this.fetch(fetchData);
  };
}
