import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoListItem from "./ToDoListItem";

const todo = {
  _id: "testID",
  content: "testing",
};

const deleteToDo = jest.fn();

test("renders my to do list ", () => {
  render(<ToDoListItem todo={todo} deleteTodo={deleteToDo} />);
  const title = screen.getByText("Delete");
  expect(title).toBeInTheDocument();
});
