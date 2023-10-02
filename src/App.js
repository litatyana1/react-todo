import React from 'react';

// ToDo component
function TodoList() {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Go to the gym" }
  ];

  const listItems = todoList.map((item) => (
    <li key={item.id}>{item.title}</li>
  ));

  return (
    <ul>{listItems}</ul>
  );
}

// App component
function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;