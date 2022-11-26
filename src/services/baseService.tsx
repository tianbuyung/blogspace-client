const API = process.env.NEXT_PUBLIC_HOST_REST_API;

class BaseService {
  async fetch({ url, options, authenticate = false }: BaseServiceType) {
    if (authenticate) {
      let token = localStorage.getItem("token");

      options.headers = {
        authorization: `${token}`,
      };
    }

    options.credentials = "include";
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
      redirect: "follow",
      credentials: "include",
    };

    const response = await fetch(`${API}${url}`, options);

    return await response.json();
  }
}

interface BaseServiceType {
  url: string;
  options: any;
  authenticate: boolean;
}

export default BaseService;
