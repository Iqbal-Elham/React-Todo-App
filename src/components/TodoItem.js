const TodoItem = ({itemProp}) => {
    console.log('itme',itemProp)
    return (
        <li>
            <input type="checkbox" />
            {itemProp.title}
        </li>
    );
  };
  export default TodoItem;
  