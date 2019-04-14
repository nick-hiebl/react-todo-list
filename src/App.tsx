import React, { Component } from 'react';
import { TodoItem } from './types';
import './App.css';
import { ItemCreator } from './ItemCreator';
import { TodoList } from './TodoList';

interface State {
  items: TodoItem[];
};

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: [
        { task: 'Pat the cows', hasCompleted: false },
        { task: 'Shag the sheepies', hasCompleted: true },
      ],
    };
  }

  addItem(item: TodoItem) {
    const { items } = this.state;
    this.setState({
      items: items.concat([item]),
    });
  }

  updateItem(item: TodoItem, status: boolean) {
    const { items } = this.state;
    item.hasCompleted = status;
    this.setState({
      items: items,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <ItemCreator create={this.addItem.bind(this)} />
        <TodoList
          items={items}
          update={this.updateItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;
