import PropTypes from "prop-types";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => {
        return (
          <li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onDeleteTodo: PropTypes.func,
};

export default TodoList;
