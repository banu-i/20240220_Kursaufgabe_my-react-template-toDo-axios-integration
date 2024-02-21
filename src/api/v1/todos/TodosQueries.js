import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}
// GET /byuserid
async function fetchTodosByUserId(userId) {
  const result = await api.get("/todos/byuserid", {
    params: { userId },
  });

  const todobyuserid = result.data;

  return todobyuserid;
}

export default { fetchAllTodos, fetchTodoById };
