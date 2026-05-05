export type ProductsEventName = "products:select" | "products:filter";

export type ProductsEvents = {
  "products:select": {
    id: number;
    name: string;
    price: number;
    emoji: string;
  };
  "products:filter": {
    query: string;
  };
};

export type ProductsEvent = {
  [T in ProductsEventName]: {
    name: T;
    payload: ProductsEvents[T];
  };
}[ProductsEventName];
