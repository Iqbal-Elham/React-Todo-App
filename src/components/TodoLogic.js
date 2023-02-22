import React, { useState } from 'react';
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodosLogic = () => {
    const todoArr = [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ];
      const [ todos, setTodos ] = useState(todoArr)

      const handleChange = (id) => {
        setTodos((prevState) => 
            prevState.map(todo => (todo.id) === id ? {...todo, completed: !todo.completed} : todo)
        )
    }
    
    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => todo.id !== id)
        ])
    }

    return (
      <div>
        <InputTodo />
        <TodoList todoProp={todos} handleChange={handleChange} delTodo={delTodo} />
      </div>
    )
  }
  export default TodosLogic;
  