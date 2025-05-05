import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClien<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  }

  post(data: T) {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  }
}
