import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = user?.token;

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    Referer: "http://localhost:3000",
  },
});
