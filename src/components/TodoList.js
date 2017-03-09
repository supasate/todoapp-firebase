import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleHandler }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleHandler={toggleHandler} />
      ))}
    </ul>
  );
};

export default TodoList;
