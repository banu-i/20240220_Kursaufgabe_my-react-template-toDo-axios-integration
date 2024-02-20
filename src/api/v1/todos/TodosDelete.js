import api from "../../config/api";
import axios from "axios";

async function fetchTodosDelete(todosDelete) {
  try {
    // Axios für Datenabzurufe
    const response = await axios.delete(
      "http://example.com/api/todos/todosdelete",
      {
        params: { todosDelete },
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

export default { fetchTodosDelete };
