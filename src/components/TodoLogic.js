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
    return (
      <div>
        <InputTodo />
        <TodoList todoProp={todos} />
      </div>
    )
  }
  export default TodosLogic;
  