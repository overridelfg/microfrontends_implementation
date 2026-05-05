import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1rem" }}>
        🔧 Standalone режим — Products MFE
      </h1>
      <ProductList />
    </div>
  </React.StrictMode>,
);
