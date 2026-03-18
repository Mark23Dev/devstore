import { customers } from "@/src/data/customers";
import { formatCurrency } from "@/src/lib/format";

export function CustomersTable() {
  if (!customers.length) {
    return (
      <div className="rounded-2xl border border-dashed bg-background p-10 text-center">
        <h3 className="text-lg font-medium">No customers available</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Customer records will appear here when orders start coming in.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="border-b bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Orders</th>
              <th className="px-4 py-3 font-medium">Total Spent</th>
              <th className="px-4 py-3 font-medium">Joined</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b last:border-0">
                <td className="px-4 py-4 font-medium">{customer.name}</td>
                <td className="px-4 py-4 text-muted-foreground">
                  {customer.email}
                </td>
                <td className="px-4 py-4">{customer.ordersCount}</td>
                <td className="px-4 py-4 font-medium">
                  {formatCurrency(customer.totalSpent)}
                </td>
                <td className="px-4 py-4 text-muted-foreground">
                  {customer.joinedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}