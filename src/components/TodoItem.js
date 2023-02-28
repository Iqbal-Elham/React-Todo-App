import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

import styles from './styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [edit, setEdit] = useState(false);

  const completedStyle = {
    textDecoration: 'line-through',
    color: 'gray',
    fontStyle: 'italic',
    opacity: 0.6,
  };

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
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
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

TodoItem.defaultProps = {
  itemProp: null,
  handleChange: () => {},
  delTodo: () => {},
  setUpdate: () => {},

};

TodoItem.propTypes = {
  itemProp: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoItem;
