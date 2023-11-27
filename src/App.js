import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { todoList: [] } });
        }, 2000);
      });
    };

    fetchData().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;

