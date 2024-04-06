"use client";
import React from "react";
import { ToDoItem, ToDoProps } from "../types";

type Props = ToDoProps & {
  deleteTodo: (_id: string) => void;
};

const ToDoListItem: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{todo.content}</h1>
      </div>
      <div className="Card--button">
        <button
          onClick={() => deleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
