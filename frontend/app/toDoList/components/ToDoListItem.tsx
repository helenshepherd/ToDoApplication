"use client";
import React from "react";
import { ToDoItem, ToDoProps, BasketItem, BasketItemProps } from "../types";

type Props = BasketItemProps & {
  deleteBasketItem: (_id: string) => void;
};

const ToDoListItem: React.FC<Props> = ({ basketItem, deleteBasketItem }) => {
  const subtotal: number = basketItem.price * basketItem.quantity;

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
        <h1>{basketItem.itemName}</h1>
      </div>
      <div>
        <h1>{`${basketItem.price}`}</h1>
      </div>
      <div>
        <select>
          <option value="0">Select quantity:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div>
        <h1>{`${basketItem.price}`}</h1>
      </div>
      <div>
        <h1>{`${subtotal}`}</h1>
      </div>
      <div>
        <button
          style={{
            borderRadius: "10px",
            background: "#FE5F55",
            padding: "0.5rem",
          }}
          onClick={() => deleteBasketItem(basketItem._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
