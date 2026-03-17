import { categories } from "@/src/data/categories";
import { SectionHeading } from "../shared/SectionHeading";
import { CategoryCard } from "./CategoryCard";


export function FeaturedCategories() {
  return (
    <section className="container mx-auto space-y-8 px-4 py-14">
      <SectionHeading
        title="Shop by category"
        description="Find the right gear for coding, focus, and productivity."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            slug={category.slug}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}