"use client";
import React from "react";
import { ToDoItem, ToDoProps } from "../types";

type Props = ToDoProps & {
  deleteTodo: (_id: string) => void;
};

const ToDoListItem: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <div
      className="Card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 0 0 0",
        maxWidth: "20rem",
      }}
    >
      <div>
        <h1>{todo.content}</h1>
      </div>
      <div>
        <button
          style={{
            borderRadius: "10px",
            background: "#FE5F55",
            padding: "0.5rem",
          }}
          onClick={() => deleteTodo(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
