import Link from "next/link";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { ProductsTable } from "@/src/components/dashboard/ProductsTable";
import { Button } from "@/src/components/ui/button";
import { DashboardShell } from "@/src/components/dashboard/DashboardShell";

export default function DashboardProductsPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Products"
        description="Manage your store inventory, featured products, and stock levels."
        action={
          <Button asChild>
            <Link href="/dashboard/products/new">Add Product</Link>
          </Button>
        }
      />

      <ProductsTable />
    </DashboardShell>
  );
}