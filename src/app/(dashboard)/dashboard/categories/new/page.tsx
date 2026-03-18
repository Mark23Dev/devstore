import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function NewCategoryPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Add Category"
        description="Create a new category for organizing products."
      />
    </DashboardShell>
  );
}