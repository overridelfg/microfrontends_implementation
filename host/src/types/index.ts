export interface Product {
  id: number;
  name: string;
  price: number;
  emoji: string;
}

export interface CartItem extends Product {
  qty: number;
}
