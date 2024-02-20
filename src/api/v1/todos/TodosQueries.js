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
async function fetchTodosByUserId(todosByUserId) {
  const result = await api.get("/todos/byuserid", {
    params: { todosByUserId },
  });

  const todobyuserid = result.data.todosbyuserid;

  return todobyuserid;
}
// PUT /mark
async function fetchTodosMark(todosMark) {
  const result = await api.put("/todos/mark", { params: { todoMark } });

  const todomark = result.data.todosmark;

  return todomark;
}
// PUT /update
async function fetchTodosUpdate(todoId) {
  const result = await api.put("/todos/update", { params: { todosUpdate } });

  const todoupdate = result.data.todosupdate;

  return todoupdate;
}
// DELETE /delete
async function fetchTodosDelete(todosDelete) {
  const result = await api.delete("/todos/delete", { params: { todosDelete } });

  const tododelete = result.data.todosdelete;

  return tododelete;
}
export default { fetchAllTodos, fetchTodoById };
