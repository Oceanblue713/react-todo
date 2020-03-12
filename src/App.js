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

const Todo =({todo, remove}) => {
// eslint-disable-next-line jsx-a11y/anchor-is-valid
return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

window.id = 0;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  addTodo(val) {
    const todo = {text: val, id: window.id++}
    this.state.data.push(todo);
    this.setState({data: this.state.data})
  }

  handleRemove(id){
    const remainder = this.state.data.fliter((todo) => {
      if(todo.id !== id)
        return todo
    });

    this.setState({data: remainder})
  }

  render(){
    return(
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
      </div>
    )
  }

}

export default App;
