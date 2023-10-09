import axios from "axios";
const baseURL = import.meta.env.VITE_REACT_APP_PUBLIC_BASE_URL;

if (!baseURL) {
  throw new Error("Missing API URL");
}

const api = axios.create({
  baseURL,
});

export default api;
