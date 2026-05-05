import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Cart";
import { eventBus } from "@mfe/pub-sub";
import type { CartEvents } from "@mfe/pub-sub";

const MOCK_ITEMS: Array<CartEvents["cart:add"]> = [
  { id: 1, name: "Кроссовки Nike", emoji: "👟", price: 5990 },
  { id: 2, name: "Рюкзак Adidas", emoji: "🎒", price: 3490 },
];

// Эмитим моковые данные чтобы корзина не была пустой в standalone
MOCK_ITEMS.forEach((item) => eventBus.emit("cart:add", item));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1rem" }}>
        🔧 Standalone режим — Cart MFE
      </h1>
      <Cart />
    </div>
  </React.StrictMode>,
);
