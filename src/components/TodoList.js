import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todoProp, handleChange, delTodo } = props
    console.log(todoProp)
    return (
        <ul>
            {todoProp.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo}/>
            ))}
        </ul>
    )
}

export default TodoList