import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function EditProductPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Edit Product"
        description="Update product information and inventory details."
      />
    </DashboardShell>
  );
}