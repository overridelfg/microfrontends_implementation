import { eventBus } from "@mfe/pub-sub";
import type { Product } from "./types";

const PRODUCTS: Product[] = [
  { id: 1, name: "Кроссовки Nike", price: 5990, emoji: "👟" },
  { id: 2, name: "Рюкзак Adidas", price: 3490, emoji: "🎒" },
  { id: 3, name: "Куртка Puma", price: 7990, emoji: "🧥" },
  { id: 4, name: "Кепка New Era", price: 1990, emoji: "🧢" },
];

function handleAddToCart(product: Product): void {
  eventBus.emit("cart:add", product);
}

export default function ProductList() {
  return (
    <div style={{ flex: 1 }}>
      <h2>Товары</h2>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5rem" }}>{p.emoji}</div>
            <div style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
              {p.name}
            </div>
            <div style={{ color: "#666", marginBottom: "0.75rem" }}>
              {p.price} ₽
            </div>
            <button
              onClick={() => handleAddToCart(p)}
              style={{
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
