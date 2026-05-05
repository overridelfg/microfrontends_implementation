export interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

export interface CartProps {
  items: CartItem[];
}
