import React, { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add a Todo");
    }
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <span>{message}</span>
    </>
  );
};
export default InputTodo;