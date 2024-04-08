"use client";

import React, { useEffect, useState } from "react";
import BasketItemFE from "./components/BasketItem";
import { BasketItem } from "./types";
import { getBasket, deleteBasketItem, updateBasketItemQuantity } from "./Api";

type Props = {
  basketId: String;
};

const BasketPage: React.FC<Props> = ({ basketId }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  console.log("basketItems", basketItems);

  useEffect(() => {
    console.log("use effect");
    fetchBasket(basketId);
  }, [basketId]);

  const fetchBasket = (id: String): void => {
    getBasket(id)
      .then((response) => {
        const items = response.data.basket.items;
        setBasketItems(items);
      })
      .catch((err: Error) => console.log(err));
  };

  const handleDeleteBasketItem = async (
    _id: String,
    itemId: String
  ): Promise<void> => {
    try {
      const response = await deleteBasketItem(_id, itemId);
      console.log("repsonse handledelete", response);
      const { status, data } = response;
      if (status !== 200) {
        throw new Error("Error! To do not deleted");
      }
      setBasketItems(data.basket.items);
    } catch (err) {
      () => console.log(err);
    }
  };

  const handleUpdateQuantity = async (
    _id: String,
    itemId: String,
    quantity: Number
  ): Promise<void> => {
    try {
      const response = await updateBasketItemQuantity(_id, itemId, quantity);
      const { status, data } = response;
      if (status !== 200) {
        throw new Error("Error! To do not deleted");
      }
      setBasketItems(data.basket.items);
    } catch (err) {
      () => console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#EEF5DB",
        padding: "1rem",
        height: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
        }}
      >
        My Basket
      </h1>

      {basketItems.map((basketItem: BasketItem) => (
        <BasketItemFE
          key={basketItem.id}
          basketId={basketId}
          deleteBasketItem={handleDeleteBasketItem}
          updateQuantity={handleUpdateQuantity}
          basketItem={basketItem}
        />
      ))}
    </div>
  );
};

export default BasketPage;
