import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const todoApi = {
  getTodos: async () => {
    const res = await axios.get(`${API_URL}/api/todos`);
    return res.data;
  },
  createTodo: async (todo) => {
    const res = await axios.post(`${API_URL}/api/todos`, todo);
    return res.data;
  },
  deleteTodo: async (id) => {
    const res = await axios.delete(`${API_URL}/api/todos/${id}`);
    return res.data;
  },
};

export default todoApi;