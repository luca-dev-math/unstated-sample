import React, { Component } from 'react';
import { Provider } from "unstated";
import Todo from './Todo';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Todo/>
        </div>
    );
  }
}

export default App;
