import React, { useState } from 'react';
import TodoList from './TodoList'; // TodoList component
import AddTodoForm from './AddTodoForm'; // AddTodoForm component

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={setNewTodo} /> 
      <p>{newTodo}</p> 
      <TodoList />
    </div>
  );
}

export default App;