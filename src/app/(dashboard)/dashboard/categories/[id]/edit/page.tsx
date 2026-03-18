import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function EditCategoryPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Edit Category"
        description="Update category details and organization."
      />
    </DashboardShell>
  );
}