import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { Product } from "@/src/types/product";
import { formatCurrency } from "@/src/lib/format";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background transition hover:shadow-sm">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square bg-muted" />
      </Link>

      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 font-semibold tracking-tight hover:underline"
          >
            {product.name}
          </Link>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-semibold">{formatCurrency(product.price)}</span>
          <span className="text-sm text-muted-foreground">
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </span>
        </div>

        <Button className="w-full" asChild>
          <Link href={`/products/${product.slug}`}>View Product</Link>
        </Button>
      </div>
    </div>
  );
}