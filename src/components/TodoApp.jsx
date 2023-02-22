import Header from "./Header";
import TodoLogic from "./TodoLogic";
import Navbar from "./Navbar"
import './styles/app.css'

const TodoApp = () => {
    return (
      <div className="wrapper">
        <div className="todos">
        <Header />
        <TodoLogic />
        </div>
      </div>
    );
  };
  export default TodoApp;
  