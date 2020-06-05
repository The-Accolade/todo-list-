import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h1 className="text-center my-4">Todo App</h1>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
