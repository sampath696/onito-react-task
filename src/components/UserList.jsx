import React from "react";
import { useState } from "react";
import "../App.css";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";

const UserList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((td) => {
        if (td.id === id) {
          td.isComplete = !td.isComplete;
        }
        return td;
      })
    );
  };

  return (
    <div>
      <h1>
        <center>Onito Task</center>
      </h1>
      <UserForm onSubmit={addTodo} />
      <br />
      <UserDetails
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default UserList;
