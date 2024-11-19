import axios from "axios";

const api = axios.create({
  baseURL: "https://ucsazjrbe0.execute-api.us-east-1.amazonaws.com/",
});

export default api;
