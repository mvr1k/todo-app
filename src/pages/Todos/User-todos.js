import React, { useState } from "react";
import TodoList from "../../components/Todo/Todo-list";

const UserTodos = () => {
  const [allTodos, setAllTodos] = useState([]);

  const addTodoHandler = (todo, id) => {
    setAllTodos((prev) => [...prev, { todo: todo, id: id }]);
  };

  const deleteTodoHandler = (id) => {
    setAllTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const deleteAllTodoHandler = () => {
    setAllTodos([]);
  };

  return (
    <div>
      <TodoList allTodos={allTodos} addTodo={addTodoHandler} deleteTodo={deleteTodoHandler} deleteAllTodo={deleteAllTodoHandler} />
    </div>
  );
};

export default UserTodos;
