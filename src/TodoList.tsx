import React from 'react';
import { TodoListProps } from './types';
import { Todo } from './Todo';

export function TodoList(props: TodoListProps) {
  return (
    <div>
      {
        props.items.map((item) =>
          Todo({ item, update: props.update })
        )
      }
    </div>
  );
}