"use client";
import React from "react";
import ToDoListPage from "./toDoList/ToDoListPage";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
          width: "90%",
          height: "90%",
        }}
      >
        <ToDoListPage />
      </div>
    </main>
  );
}
