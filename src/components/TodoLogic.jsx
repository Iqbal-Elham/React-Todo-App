import React, { useState } from 'react';
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

const TodosLogic = () => {
    const todoArr = [
        {
          id: uuidv4,
          title: 'Setup development environment',
          completed: true,
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

    const addTodoItem = (title) => {
      const newTodo = {
        id:uuidv4(),
        title: title,
        completed: false
      }
      setTodos([...todos,newTodo])
    }

    return (
      <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodoList todoProp={todos} handleChange={handleChange} delTodo={delTodo} />
      </div>
    )
  }
  export default TodosLogic;
  