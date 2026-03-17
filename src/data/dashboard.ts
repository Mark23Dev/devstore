import { Order } from "../types/order";

export const dashboardStats = {
  revenue: 284500,
  orders: 128,
  products: 10,
  customers: 84,
};

export const recentOrders: Order[] = [
  {
    id: "ORD-1001",
    customerName: "Mark Njoroge",
    customerEmail: "mark@example.com",
    total: 14999,
    status: "processing",
    date: "2026-03-12",
  },
  {
    id: "ORD-1002",
    customerName: "Grace Wanjiku",
    customerEmail: "grace@example.com",
    total: 42999,
    status: "delivered",
    date: "2026-03-11",
  },
  {
    id: "ORD-1003",
    customerName: "Ian Mwangi",
    customerEmail: "ian@example.com",
    total: 2999,
    status: "pending",
    date: "2026-03-10",
  },
  {
    id: "ORD-1004",
    customerName: "Faith Chebet",
    customerEmail: "faith@example.com",
    total: 38999,
    status: "shipped",
    date: "2026-03-09",
  },
];

export const lowStockProducts = [
  {
    id: "prod_3",
    name: "LG UltraFine 27-inch Monitor",
    stock: 5,
  },
  {
    id: "prod_4",
    name: "Sony WH-1000XM5 Headphones",
    stock: 6,
  },
  {
    id: "prod_7",
    name: "Dell USB-C Docking Station",
    stock: 7,
  },
];