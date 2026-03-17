import { Product } from "@/src/types/product";
import { Badge } from "@/src/components/ui/badge"
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";


type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const inStock = product.stock > 0;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          <Badge variant="outline">{product.brand}</Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            Rated {product.rating.toFixed(1)} ★
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-3xl font-bold tracking-tight">
          {formatCurrency(product.price)}
        </p>
        <p className="text-sm text-muted-foreground">
          {inStock ? `${product.stock} items in stock` : "Currently out of stock"}
        </p>
      </div>

      <p className="max-w-xl text-base leading-7 text-muted-foreground">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" disabled={!inStock}>
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button size="lg" variant="outline">
          Buy Now
        </Button>
      </div>

      <div className="rounded-xl border bg-muted/30 p-4">
        <h3 className="font-medium">Why developers like this</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Reliable performance, clean setup aesthetics, and practical usability
          for focused work sessions.
        </p>
      </div>
    </div>
  );
}