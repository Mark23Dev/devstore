import { Product } from "@/src/types/product";
import { SectionHeading } from "../shared/SectionHeading";
import { ProductCard } from "./ProductCard";


type RelatedProductsProps = {
  currentProductId: string;
  category: string;
  products: Product[];
};

export function RelatedProducts({
  currentProductId,
  category,
  products,
}: RelatedProductsProps) {
  const related = products
    .filter(
      (product) =>
        product.id !== currentProductId && product.category === category
    )
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <section className="space-y-8">
      <SectionHeading
        title="Related products"
        description="More gear in the same category that you may like."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}