import React from 'react';
import TodoList from './TodoList'; // TodoList component
import AddTodoForm from './AddTodoForm'; // AddTodoForm component

function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm /> 
      <TodoList /> 
    </div>
  );
}

export default App;