import React, { useState, useEffect } from 'react';
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

const TodosLogic = () => {

  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

      const [ todos, setTodos ] = useState(getInitialTodos())

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

    const setUpdate = (updateTitle, id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updateTitle;
          }
            return todo;
        })
      )
    }

    useEffect(() => {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }, [todos])

    return (
      <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodoList todoProp={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}/>
      </div>
    )
  }
  export default TodosLogic;
  