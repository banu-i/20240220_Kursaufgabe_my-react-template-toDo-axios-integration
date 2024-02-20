import api from "../../config/api";
import api from "../../config/api";
import axios from "axios";

async function fetchTodosMark(todosMark) {
  try {
    // Axios für Datenabzurufe
    const response = await axios.put("http://example.com/api/todos/todosmark", {
      params: { todosUpdate },
    });
    // Daten aus der Antwort exthrahiert
    const todos = response.data;
    // die Todos Output
    return todos;
  } catch (error) {
    // Fehlermeldungen hier
    console.error("Error fetching todos:", error);
    throw error; // Fehler weiterleitung -Abfrage
  }
}

export default { fetchTodosMark };
