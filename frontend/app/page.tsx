"use client";
import React from "react";
import BasketPage from "./basket/BasketPage";

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
        <BasketPage basketId="66145569b692339dbd964587" />
      </div>
    </main>
  );
}
