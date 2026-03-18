import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { OrdersTable } from "@/src/components/dashboard/OrdersTable";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function DashboardOrdersPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Orders"
        description="Review customer purchases and track fulfillment progress."
      />

      <OrdersTable />
    </DashboardShell>
  );
}