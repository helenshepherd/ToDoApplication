"use client";

import React, { useState } from "react";
import { ToDoItem } from "../types";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ToDoItem | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ToDoItem | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 0.5rem 0 0",
            whiteSpace: "nowrap",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="content"
            style={{
              padding: "0 0.5rem 0 0",
            }}
          >
            To do:
          </label>
          <input
            onChange={handleForm}
            type="text"
            id="content"
            style={{
              width: "100%",
            }}
          />
        </div>

        <button
          style={{
            borderRadius: "10px",
            background: "#B8D8D8",
            padding: "0.5rem",
          }}
          disabled={formData === undefined ? true : false}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
