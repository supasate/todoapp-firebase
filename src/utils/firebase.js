import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

firebase.initializeApp(config);

const database = firebase.database();
const todosRef = database.ref('todos');

const saveTodos = todos => {
  todos.forEach(todo => {
    database.ref(`todos/${todo.id}`).set({
      ...todo,
    });
  });
};

const fetchTodos = callback => {
  todosRef.once('value').then(snapshot => {
    const todos = [];
    if (snapshot.val()) {
      snapshot.forEach(snap => {
        todos.push(snap.val());
      });
    }
    callback(todos);
  });
};

const listenTodos = callback => {
  todosRef.on('value', snapshot => {
    const todos = [];
    if (snapshot.val()) {
      snapshot.forEach(snap => {
        todos.push(snap.val());
      });
    }
    callback(todos);
  });
};

// const saveTodos = todos => {};
// const fetchTodos = callback => {};
// const listenTodos = callback => {};

export { saveTodos, fetchTodos, listenTodos };
