import React from 'react';
import logo from './logo.svg';
import './App.css';


const TodoForm = ({addTodo}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div>
      <div>
        <h1>To-Do</h1>
      </div>
    </div>
  );
}

window.id = 0;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }
  
}

export default App;
