import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
        { id: 3, text: 'Sleep', complete: false },
      ],
    };
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.reduce(
            (max, todo) => Math.max(max, todo.id),
            0
          ) + 1,
          text,
          complete: false,
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <NewTodo addHandler={this.addHandler} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
