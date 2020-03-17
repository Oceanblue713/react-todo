import React, { Component } from 'react';

class TodoItems extends Component {
  crearteTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
}

export default TodoItems;