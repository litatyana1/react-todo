import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const uniqueId = Date.now();
    onAddTodo({ title: todoTitle, id: uniqueId });
    setTodoTitle('');
  };

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
};

export default AddTodoForm;