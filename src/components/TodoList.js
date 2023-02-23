import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */
const TodoList = (props) => {
  const {
    todoProp, handleChange, delTodo, setUpdate,
  } = props;
  return (
    <ul>
      {todoProp.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
