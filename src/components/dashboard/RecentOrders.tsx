import { recentOrders } from "@/src/data/dashboard";
import { formatCurrency } from "@/src/lib/format";

export function RecentOrders() {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="mb-5 space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">Recent Orders</h2>
        <p className="text-sm text-muted-foreground">
          A snapshot of the latest customer activity.
        </p>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-1">
              <p className="font-medium">{order.customerName}</p>
              <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
              <p className="text-xs text-muted-foreground">
                {order.id} • {order.date}
              </p>
            </div>

            <div className="space-y-1 text-left sm:text-right">
              <p className="font-semibold">{formatCurrency(order.total)}</p>
              <p className="text-sm capitalize text-muted-foreground">
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}