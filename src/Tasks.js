import React from "react";

function Tasks({ taskArray }) {
  const listItems = taskArray.map((prop) => <li key={prop.id}>{prop.text}</li>);

  return <ul>{listItems}</ul>;
}

export default Tasks;
