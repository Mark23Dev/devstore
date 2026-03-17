import { Product } from "@/src/types/product";
import { EmptyState } from "../shared/EmptyState";
import { ProductCard } from "./ProductCard";


type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <EmptyState
        title="No products found"
        description="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}