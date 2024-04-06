"use client";

import React, { useEffect, useState } from "react";
import ToDoListItem from "./components/ToDoListItem";
import AddTodo from "./components/AddToDo";
import { ToDoItem } from "./types";
import { getToDos, addToDoItem, deleteToDoItem } from "./Api";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  console.log("todos", todos);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getToDos()
      .then(({ data: { todos } }: ToDoItem[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: ToDoItem
  ): Promise<void> => {
    console.log("formData HERE", formData);
    e.preventDefault();
    try {
      const response = await addToDoItem(formData);
      const { status, data } = response;
      if (status !== 201) {
        throw new Error("Error! To do not saved");
      }
      setTodos(response.data.todos);
    } catch (err) {
      () => console.log(err);
    }
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteToDoItem(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>My To Do List</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ToDoItem) => (
        <ToDoListItem
          key={todo._id}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  );
};

export default App;
