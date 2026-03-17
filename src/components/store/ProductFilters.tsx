import { Button } from "@/src/components/ui/button";
import { categories } from "@/src/data/categories";

export function ProductsFilters() {
  return (
    <aside className="space-y-6 rounded-xl border bg-background p-4">
      <div className="space-y-3">
        <h3 className="font-semibold tracking-tight">Categories</h3>
        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              size="sm"
              className="justify-start"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold tracking-tight">Availability</h3>
        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
          <Button variant="outline" size="sm">
            In Stock
          </Button>
          <Button variant="outline" size="sm">
            Featured
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold tracking-tight">Price</h3>
        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
          <Button variant="outline" size="sm">
            Under KES 5,000
          </Button>
          <Button variant="outline" size="sm">
            KES 5,000 - 15,000
          </Button>
          <Button variant="outline" size="sm">
            Over KES 15,000
          </Button>
        </div>
      </div>
    </aside>
  );
}