import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/smart-campus-resource-booking/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;