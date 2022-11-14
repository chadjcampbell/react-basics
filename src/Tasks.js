import React from "react";

function Tasks({ taskArray, onDeleteTodo }) {
  const listItems = taskArray.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete </button>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default Tasks;
