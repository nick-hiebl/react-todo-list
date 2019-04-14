import React from 'react';
import { TodoItem, UpdateItem } from './types';

const CheckBox = (
  props: {
    checked: boolean,
    onChange: any,
  }
) => (
  <input type="checkbox" {...props} />
);

interface Props {
  item: TodoItem;
  update: UpdateItem;
};

export function Todo(props: Props) {
  return (
    <div>
      <span>
        <CheckBox
          checked={props.item.hasCompleted}
          onChange={(event: any) => {
            props.update(props.item, event.target.checked);
          }}
        /> 
        { props.item.task }
      </span>
    </div>
  );
}