
import { Button } from "@/src/components/ui/button";
import { SearchInput } from "../shared/SearchInput";
import { products } from "@/src/data/products";

export function ProductsToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-background p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <SearchInput placeholder="Search products..." />
        <Button variant="outline">Sort</Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {products.length} products
      </p>
    </div>
  );
}