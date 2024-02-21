import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}
// PUT /mark
async function markTodo(id, isDone) {
  const result = await api.put("/todos/mark", { id, isDone });
  const todomark = result.data;

  return todomark;
}
// PUT /update
async function fetchTodosUpdate(todosUpdate) {
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
export default { createTodo };
