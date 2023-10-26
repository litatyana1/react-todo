import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) { // Destructuring for props
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;