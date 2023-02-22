import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todoProp } = props
    console.log('propppp',todoProp)
    return (
        <ul>
            {todoProp.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} />
            ))}
        </ul>
    )
}

export default TodoList