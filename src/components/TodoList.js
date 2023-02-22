import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todoProp, handleChange } = props
    console.log(todoProp)
    return (
        <ul>
            {todoProp.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange}/>
            ))}
        </ul>
    )
}

export default TodoList