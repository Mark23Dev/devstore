import { PageHeader } from "@/src/components/shared/PageHeader";
import { ProductsFilters } from "@/src/components/store/ProductFilters";
import { ProductGrid } from "@/src/components/store/ProductGrid";
import { ProductsToolbar } from "@/src/components/store/ProductsToolbar";
import { products } from "@/src/data/products";


export default function ProductsPage() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <PageHeader
        title="Products"
        description="Browse developer gear, workspace tools, and productivity essentials."
      />

      <ProductsToolbar />

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <ProductsFilters />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}