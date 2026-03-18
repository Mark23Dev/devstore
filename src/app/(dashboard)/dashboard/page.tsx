import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { LowStockProducts } from "@/src/components/dashboard/LowStockProducts";
import { RecentOrders } from "@/src/components/dashboard/RecentOrders";
import { StatCard } from "@/src/components/dashboard/StatCard";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { dashboardStats } from "@/src/data/dashboard";
import { formatCurrency } from "@/src/lib/format";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Overview"
        description="Monitor store performance, recent orders, and inventory status."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenue"
          value={formatCurrency(dashboardStats.revenue)}
          description="Total store revenue"
        />
        <StatCard
          title="Orders"
          value={dashboardStats.orders}
          description="Orders processed"
        />
        <StatCard
          title="Products"
          value={dashboardStats.products}
          description="Products in store"
        />
        <StatCard
          title="Customers"
          value={dashboardStats.customers}
          description="Registered customers"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <RecentOrders />
        <LowStockProducts />
      </div>
    </DashboardShell>
  );
}