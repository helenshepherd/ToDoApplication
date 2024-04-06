export interface ToDoItem {
  _id: string;
  content: string;
}

export interface IError {
  errors: string[];
  status: string;
}

export type ToDoProps = {
  todo: ToDoItem;
};

export type ApiDataType = {
  message: string;
  status: string;
  todos: ToDoItem[];
  todo?: ToDoItem;
};
