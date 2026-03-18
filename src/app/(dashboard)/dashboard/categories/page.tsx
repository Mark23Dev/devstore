import { CategoriesTable } from "@/src/components/dashboard/CategoriesTable";
import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";


export default function DashboardCategoriesPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Categories"
        description="Organize your products into clear store groupings."
        action={
          <Button asChild>
            <Link href="/dashboard/categories/new">Add Category</Link>
          </Button>
        }
      />

      <CategoriesTable />
    </DashboardShell>
  );
}