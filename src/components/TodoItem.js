import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from './styles/TodoItem.module.css';
/* eslint-disable react/prop-types */
const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const viewMode = {};
  const editMode = {};
  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
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
        <button type="button" onClick={handleEdit}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '20px' }} />
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '20px' }} />
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
