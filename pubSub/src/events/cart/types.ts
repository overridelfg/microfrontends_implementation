export type CartEventName = "cart:add" | "cart:remove" | "cart:clear";

export type CartEvents = {
  "cart:add": {
    id: number;
    name: string;
    price: number;
    emoji: string;
  };
  "cart:remove": {
    id: number;
  };
  "cart:clear": undefined;
};

export type CartEvent = {
  [T in CartEventName]: {
    name: T;
    payload: CartEvents[T];
  };
}[CartEventName];
