import { products } from "@/src/data/products";
import { SectionHeading } from "../shared/SectionHeading";
import { ProductCard } from "./ProductCard";


export function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="container mx-auto space-y-8 px-4 py-14">
      <SectionHeading
        title="Featured products"
        description="A curated selection of developer gear and workspace essentials."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}