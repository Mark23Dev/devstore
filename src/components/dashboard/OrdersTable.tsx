import Link from "next/link";
import { recentOrders } from "@/src/data/dashboard";
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";
import { StatusBadge } from "@/src/components/shared/StatusBadge";

export function OrdersTable() {
  if (!recentOrders.length) {
    return (
      <div className="rounded-2xl border border-dashed bg-background p-10 text-center">
        <h3 className="text-lg font-medium">No orders available</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Customer orders will appear here once purchases are made.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-sm">
          <thead className="border-b bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Order ID</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="px-4 py-4 font-medium">{order.id}</td>
                <td className="px-4 py-4">{order.customerName}</td>
                <td className="px-4 py-4 text-muted-foreground">
                  {order.customerEmail}
                </td>
                <td className="px-4 py-4 text-muted-foreground">
                  {order.date}
                </td>
                <td className="px-4 py-4 font-medium">
                  {formatCurrency(order.total)}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-4 text-right">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/orders/${order.id}`}>View</Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}