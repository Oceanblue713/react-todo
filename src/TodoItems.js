import React, { Component } from 'react';

class TodoItems extends Component {
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