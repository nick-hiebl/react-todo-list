import React, { Component } from 'react';
import { ItemCreatorProps } from './types';

interface State {
    currentValue: string;
};

export class ItemCreator extends Component<ItemCreatorProps, State> {
  constructor(props: ItemCreatorProps) {
    super(props);
    
    this.state = {
      currentValue: '',
    };
  }

  updateValue(event: { target: { value: string } }) {
    this.setState({
      currentValue: event.target.value,
    });
  }

  onAdd() {
    const { currentValue } = this.state;

    this.props.create({
      task: currentValue,
      hasCompleted: false,
    });

    this.setState({
      currentValue: '',
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.currentValue}
          onChange={this.updateValue.bind(this)}
        />
        <button onClick={this.onAdd.bind(this)}>Add!</button>
      </div>
    );
  }
}