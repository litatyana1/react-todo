import React from 'react';

function TodoList() {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Go to the gym" }
  ];

  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;