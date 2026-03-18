import Link from "next/link";
import { products } from "@/src/data/products";
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";

export function ProductsTable() {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed bg-background p-10 text-center">
        <h3 className="text-lg font-medium">No products available</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Add your first product to start building your store inventory.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="border-b bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Brand</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Featured</th>
              <th className="px-4 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b last:border-0">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-muted" />
                    <div className="space-y-1">
                      <p className="font-medium leading-none">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.slug}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-muted-foreground">
                  {product.category}
                </td>

                <td className="px-4 py-4 text-muted-foreground">
                  {product.brand}
                </td>

                <td className="px-4 py-4 font-medium">
                  {formatCurrency(product.price)}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium">
                    {product.stock}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className="text-muted-foreground">
                    {product.featured ? "Yes" : "No"}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/products/${product.id}/edit`}>
                      Edit
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}