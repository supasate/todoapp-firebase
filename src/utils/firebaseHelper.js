import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

firebase.initializeApp(config);

const database = firebase.database();

const fetchTodos = callback => {
  database.ref('todos').once('value').then(snapshot => {
    const todos = [];

    if (snapshot.val()) {
      snapshot.forEach(snap => {
        todos.push(snap.val());
      });
    }
    callback(todos);
  });
};

export { fetchTodos };