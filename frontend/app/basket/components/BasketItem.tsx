"use client";
import React from "react";
import { BasketItemProps } from "../types";

type Props = BasketItemProps & {
  deleteBasketItem: (_id: String, id: String) => void;
  updateQuantity: (_id: String, id: String, quantity: Number) => void;
};

const BasketItemFE: React.FC<Props> = ({
  basketId,
  basketItem,
  deleteBasketItem,
  updateQuantity,
}) => {
  const subtotal: Number = basketItem.price * basketItem.quantity;

  console.log("basketItem", basketItem);
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
        <select
          onChange={(e) =>
            updateQuantity(basketId, basketItem.id, parseInt(e.target.value))
          }
        >
          <option value={basketItem.quantity}>{basketItem.quantity}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>s<option value="5">5</option>
          <option value="6">6</option>
        </select>
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
          onClick={() => deleteBasketItem(basketId, basketItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BasketItemFE;
