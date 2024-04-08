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
  basket: {
    _id: String;
    id: String;
    items: BasketItem[];
  };
};

export interface BasketItem {
  id: string;
  itemName: string;
  price: number;
  quantity: number;
}

export type BasketItemProps = {
  basketId: String;
  basketItem: BasketItem;
};
