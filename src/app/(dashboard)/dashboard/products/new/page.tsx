import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function NewProductPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Add Product"
        description="Create a new product for your store."
      />
    </DashboardShell>
  );
}