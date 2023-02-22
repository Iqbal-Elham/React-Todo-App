import React, {useState} from 'react';

const InputTodo = ({addTodoItem}) => {
    const [ title, setTitle ] = useState('');

    const handleChange = (e) => {
      setTitle(e.target.value);
    }

    const handleAdd = (e) => {
      e.preventDefault();
      addTodoItem(title)
      setTitle('');
    }

    return (
      <form onSubmit={handleAdd}>
        <input type="text" 
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        />
        <button>Add</button>
      </form>
    );
  };
  export default InputTodo;
  