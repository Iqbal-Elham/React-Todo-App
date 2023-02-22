import React, { useState } from "react";
import './styles/app.css'

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
      <form onSubmit={handleAdd} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit">Add</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
