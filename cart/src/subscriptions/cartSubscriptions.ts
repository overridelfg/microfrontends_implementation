import { eventBus } from "@mfe/pub-sub";
import type { CartEvents } from "@mfe/pub-sub";

export type CartItem = CartEvents["cart:add"] & { qty: number };

type Callbacks = {
  onAdd: (product: CartEvents["cart:add"]) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
};

export function subscribeToCart(callbacks: Callbacks): () => void {
  const unsubAdd = eventBus.on("cart:add", (product) =>
    callbacks.onAdd(product),
  );
  const unsubRemove = eventBus.on("cart:remove", ({ id }) =>
    callbacks.onRemove(id),
  );
  const unsubClear = eventBus.on("cart:clear", () => callbacks.onClear());

  return () => {
    unsubAdd();
    unsubRemove();
    unsubClear();
  };
}
