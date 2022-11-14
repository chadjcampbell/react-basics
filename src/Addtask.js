import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      onAddTodo(title);
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add element to list"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
