import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) { // Destructuring for props
  const [todoTitle, setTodoTitle] = useState(''); 

  function handleAddTodo(event) {
    event.preventDefault();
    const uniqueId = Date.now();
    onAddTodo({ title: todoTitle, id: uniqueId });
    setTodoTitle(''); 
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle} 
        onChange={(event) => setTodoTitle(event.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;