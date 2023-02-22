const TodoItem = ({itemProp, handleChange, delTodo}) => {

    
    return (
        <li>
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
            />
            {itemProp.title}
            <button onClick={() => delTodo(itemProp.id)} type="button">Delete</button>
        </li>
    );
  };
  export default TodoItem;
  