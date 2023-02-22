import styles from './styles/TodoItem.module.css'

const TodoItem = ({itemProp, handleChange, delTodo}) => {

    return (
        <li className={styles.item}>
            <div className={styles.content}>
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
            />
            {itemProp.title}
            <button onClick={() => delTodo(itemProp.id)} type="button">Delete</button>
            </div>
        </li>
    );
  };
  export default TodoItem;
  