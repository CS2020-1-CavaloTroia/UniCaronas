import axios from "axios";

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: "BASE_URL",
});

export default api;
