import React from 'react';

function TodoListItem(props) {
  const todo = props.todo;

  return (
    <li>{todo.title}</li>
  );
}

export default TodoListItem;