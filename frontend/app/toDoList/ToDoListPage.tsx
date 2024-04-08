"use client";

import React, { useEffect, useState } from "react";
import ToDoListItem from "./components/ToDoListItem";
import AddTodo from "./components/AddToDo";
import { ToDoItem } from "./types";
import { getToDos, addToDoItem, deleteToDoItem } from "./Api";

const ToDoListPage: React.FC = () => {
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

  const handleDeleteTodo = async (_id: string): Promise<void> => {
    try {
      const response = await deleteToDoItem(_id);
      console.log("delete response", response);
      const { status, data } = response;
      if (status !== 200) {
        throw new Error("Error! To do not deleted");
      }
      setTodos(response.data.todos);
    } catch (err) {
      () => console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#EEF5DB",
        padding: "1rem",
        height: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
        }}
      >
        My To Do List
      </h1>
      <div
        style={{
          padding: "1rem 0 0 0",
        }}
      >
        <AddTodo saveTodo={handleSaveTodo} />
      </div>

      {todos.map((todo: ToDoItem) => (
        <ToDoListItem
          key={todo._id}
          deleteBasketItem={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ToDoListPage;
