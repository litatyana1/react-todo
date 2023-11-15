import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel'; // Import the updated component

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleAddTodo() {
    const uniqueId = Date.now();
    onAddTodo({ title: todoTitle, id: uniqueId });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      {/* Pass the text "Title" inside the InputWithLabel component tags */}
      <InputWithLabel id="todoTitle" value={todoTitle} onInputChange={setTodoTitle}>
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;