import api from "../../config/api";
import axios from "axios";

async function fetchTodosByUserId(todosByUserId) {
  try {
    // Axios für Datenabzurufe
    const response = await axios.get(
      "http://example.com/api/todos/todosbyuserid",
      {
        params: { todosByUserId },
      }
    );
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

export default { fetchTodosByUserId };
