import { useEffect, useState } from "react";
import { subscribeToCart } from "./subscriptions/cartSubscriptions";
import type { CartItem } from "./subscriptions/cartSubscriptions";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    return subscribeToCart({
      onAdd: (product) => {
        setItems((prev) => {
          const existing = prev.find((i) => i.id === product.id);
          if (existing) {
            return prev.map((i) =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
            );
          }
          return [...prev, { ...product, qty: 1 }];
        });
      },
      onRemove: (id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
      },
      onClear: () => {
        setItems([]);
      },
    });
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      style={{
        width: 280,
        border: "1px solid #eee",
        borderRadius: 8,
        padding: "1rem",
        alignSelf: "flex-start",
      }}
    >
      <h2>🛒 Корзина</h2>

      {items.length === 0 ? (
        <p style={{ color: "#aaa" }}>Корзина пуста</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <span>
                {item.emoji} {item.name} × {item.qty}
              </span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {item.price * item.qty} ₽
                </span>
                <button
                  onClick={() =>
                    setItems((prev) => prev.filter((i) => i.id !== item.id))
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#aaa",
                    fontSize: "1rem",
                    padding: 0,
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            <span>Итого:</span>
            <span>{total} ₽</span>
          </div>

          <button
            onClick={() => setItems([])}
            style={{
              marginTop: "0.5rem",
              width: "100%",
              background: "none",
              color: "#aaa",
              border: "1px solid #eee",
              borderRadius: 6,
              padding: "0.5rem",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Очистить корзину
          </button>

          <button
            style={{
              marginTop: "0.5rem",
              width: "100%",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "0.75rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Оформить заказ
          </button>
        </>
      )}
    </div>
  );
}
