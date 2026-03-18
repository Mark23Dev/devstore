import { CustomersTable } from "@/src/components/dashboard/CustomersTable";
import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function DashboardCustomersPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Customers"
        description="View your customer base and monitor purchase activity."
      />

      <CustomersTable />
    </DashboardShell>
  );
}