export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: OrderStatus;
  date: string;
};