import Header from './Header';
import TodoLogic from './TodoLogic';
import './styles/app.css';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodoLogic />
    </div>
  </div>
);
export default TodoApp;
