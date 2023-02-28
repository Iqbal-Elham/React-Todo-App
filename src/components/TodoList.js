import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

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

TodoList.defaultProps = {
  todoProp: [],
  handleChange: () => {},
  delTodo: () => {},
  setUpdate: () => {},
};

TodoList.propTypes = {
  todoProp: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoList;
