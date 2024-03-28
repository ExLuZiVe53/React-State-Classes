import React, { Component } from "react";
// import Counter from "./Counter/Counter.js";
// import Dropdown from "./Dropdown/Dropdown.js";
import ColorPicker from "./ColorPicker";
// import TodoList from "./TodoList/TodoList.js";
// import initialTodos from "../todos.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    // todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    // const { todos } = this.state;
    // const totalTodoCount = todos.length;
    // //const complitedTodos = todos.filter(todo=> todo.complited)
    // const completedTodoCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    return (
      <>
        {/* <h1>State component</h1> */}
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown /> */}
        <ColorPicker options={colorPickerOptions} />

        {/* <div>
          <p>Total of todo:{totalTodoCount}</p>
          <p>Number of completed todo:{completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
