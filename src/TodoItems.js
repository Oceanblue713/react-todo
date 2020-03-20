import React, { Component } from 'react';

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.crearteTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }
  
  crearteTasks(item) {
    return <li onClick={() => this.delete(item.key)}
               key={item.key}>{item.text}</li>
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.crearteTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}

export default TodoItems;