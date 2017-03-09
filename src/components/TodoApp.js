import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { saveTodos, fetchTodos, listenTodos } from '../utils/firebase';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addHandler = this.addHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {
    fetchTodos(todos => {
      this.setState({
        todos,
      });
    });
    listenTodos(todos => {
      this.setState({
        todos,
      });
    });
  }

  addHandler(text) {
    /*this.setState({
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
    });*/
    saveTodos([
      ...this.state.todos,
      {
        id: this.state.todos.reduce((max, todo) => Math.max(max, todo.id), 0) +
          1,
        text,
        complete: false,
      },
    ]);
  }

  toggleHandler(id) {
    // this.setState({
    //   todos: this.state.todos.map(
    //     todo =>
    //       todo.id === id
    //         ? { id: todo.id, text: todo.text, complete: !todo.complete }
    //         : todo
    //   ),
    // });
    saveTodos(
      this.state.todos.map(
        todo =>
          todo.id === id
            ? { id: todo.id, text: todo.text, complete: !todo.complete }
            : todo
      )
    );
  }

  render() {
    return (
      <div>
        <NewTodo addHandler={this.addHandler} />
        <TodoList todos={this.state.todos} toggleHandler={this.toggleHandler} />
      </div>
    );
  }
}

export default TodoApp;
