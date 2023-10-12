import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Go to the gym" }
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;