import { post } from "@/utils";
import { ToDoItem, ApiDataType } from "./types";
import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:8080";

export const addToDoItem = async (
  formData: ToDoItem
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ToDoItem, "_id"> = {
      content: formData.content,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/toDoItem/create",
      todo
    );
    console.log("saveTodo Api.js", saveTodo);
    return saveTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteToDoItem = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + `/toDoItem/delete/${_id}`
    );
    return deletedTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getToDos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/toDoItem/getToDos"
    );
    console.log("todosapi", todos);
    return todos;
  } catch (error: any) {
    throw new Error(error);
  }
};
