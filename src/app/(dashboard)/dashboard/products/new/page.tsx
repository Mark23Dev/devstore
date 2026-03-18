import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { ProductForm } from "@/src/components/forms/ProductForm";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function NewProductPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Add Product"
        description="Create a new product for your store."
      />

      <ProductForm mode="create" />
    </DashboardShell>
  );
}