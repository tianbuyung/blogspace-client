import BaseService from "./baseService";

export default class AuthService extends BaseService {
  login = async (data: LoginData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const fetchData = { url: "/auth/login", options, authenticate: false };

    return await this.fetch(fetchData);
  };

  register = async (data: RegisterData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const fetchData = { url: "/auth/register", options, authenticate: false };

    return await this.fetch(fetchData);
  };
}

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
