import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; 

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]); 
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} /> 
      <TodoList todoList={todoList} /> 
    </div>
  );
}

export default App;