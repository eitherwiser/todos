import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import { v4 as uuid } from "uuid";

import Todos from './components/todos/todos.jsx';
import todos from './assets/todos-mock.json';

import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Todos todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
