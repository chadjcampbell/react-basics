import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Clock from "./Clock";
import Tasks from "./Tasks";
import AddTask from "./Addtask";
import React, { useState } from "react";

const initialTodos = [
  { id: 0, text: "Test element" },
  { id: 1, text: "Another test element" },
  { id: 2, text: "One more test element" },
];
let nextId = 3;

function App() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: title,
      },
    ]);
  }
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent title="This is a test prop" />
        <Clock />
        <div className="tasksContainer">
          <AddTask onAddTodo={handleAddTodo} />
          <Tasks taskArray={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
