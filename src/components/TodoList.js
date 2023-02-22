const TodoList = (props) => {
    return (
        <ul>
            {props.todoProp.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList