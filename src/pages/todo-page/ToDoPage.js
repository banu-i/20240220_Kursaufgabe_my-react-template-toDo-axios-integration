import { TodosQueries } from "../../api/v1/todos";
import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";
import { useState, useEffect } from "react";

function ToDoPage() {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      console.log("Hello world 1 von fetchTodos");

      const jsonResponse = await TodosQueries.fetchAllTodos();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }

  // Alternative Funktion für den API Aufruf
  // Achtung: Wird nicht verwendet
  function alternativeFetchTodos() {
    fetch("http://localhost:5050/v1/todos/all")
      .then((response) => {
        console.log("Hello world 2 von alternativeFetchTodos");
        console.log("Das ist meine rohe Antwort", response);
        return response.json();
      })
      .then((todosJson) => {
        console.log("Hello world 3 von alternativeFetchTodos");
        // setTodos(todosJson);
      });

    // Zu Kursaufgabe 20240220 -start
    // console.log("Hello world 1 von alternativeFetchTodos");
  }
  // TodosByUserId
  async function fetchAndSetTodosByUserId(byUserId) {
    try {
      const jsonResponse = await TodosQueries.fetchTodosByUserId(byUserId);
      setTodos(jsonResponse);
    } catch (error) {
      console.error("Error fetching todos by user ID:", error);
    }
  }
  // TodosMark
  async function fetchAndSetTodosMark(todosMark) {
    try {
      const jsonResponse = await TodosQueries.fetchTodosMark(todosMark);
      setTodos(jsonResponse);
    } catch (error) {
      console.error("Error fetching todos by Mark:", error);
    }
  }
  // TodosUpdate
  async function fetchAndSetTodosUpdate(todosUpdate) {
    try {
      const jsonResponse = await TodosQueries.fetchTodosUpdate(todosUpdate);
      setTodos(jsonResponse);
    } catch (error) {
      console.error("Error fetching todos by Update:", error);
    }
  }
  // TodosDelete
  async function fetchAndSetTodosDelete(todosDelete) {
    try {
      const jsonResponse = await TodosQueries.fetchTodosDelete(todosDelete);
      setTodos(jsonResponse);
    } catch (error) {
      console.error("Error fetching todos by Delete:", error);
    }
    // Kurdsaufgabe 20240220 - end
  }

  // useEffect
  useEffect(() => {
    fetchTodos();
  }, []);

  //###Ergänzung zum Code vom Unterricht:###
  //Wenn todos noch leer ist, gib leeren Container aus
  if (todos.length == 0) {
    return <div className={styles.mainContainer}></div>;
  }

  //wenn wir die Daten in todos drin haben (durch den fetch)
  //können wir auch todos, sowie dessen Inhalte in Probs weitergeben
  //hier: "todo={todos[1]}" gibt das 2. todo weiter.
  return (
    <div className={styles.mainContainer}>
      <ToDoItem todo={todos[0]}></ToDoItem>
      <ToDoItem todo={todos[1]}></ToDoItem>
    </div>
  );
}

export default ToDoPage;

// async function fetchTodos() {
//   try {
//     console.log("Hello world 1 von fetchTodos");
//     const response = await fetch("http://localhost:5050/v1/todos/all");
//     const jsonResponse = await response.json();
//     console.log("MY JSON RESPONSE", jsonResponse);

//     setTodos(jsonResponse);
//   } catch (e) {
//     console.log("Hello world", e);
//   }
// }
