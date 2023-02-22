import React, { useState } from "react";

import styles from "./styles/TodoItem.module.css";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  let viewMode = {}
  let editMode = {}
  if (edit) {
    viewMode.display = "none";
  }
  else {
    editMode.display = "none"
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)} type="button">
          Delete
        </button>
      </div>
      <input 
      type="text" 
      value={itemProp.title} 
      className={styles.textInput} 
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
