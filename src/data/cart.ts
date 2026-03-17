import { CartItem } from "../types/cart";
import { products } from "./products";

export const cartItems: CartItem[] = [
  {
    id: "cart_1",
    product: products[0],
    quantity: 1,
  },
  {
    id: "cart_2",
    product: products[1],
    quantity: 2,
  },
];