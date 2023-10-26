import React from 'react';

function TodoListItem({ todo }) { // Destructuring for props
  return <li>{todo.title}</li>;
}

export default TodoListItem;