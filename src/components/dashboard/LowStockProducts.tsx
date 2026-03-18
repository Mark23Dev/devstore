import { lowStockProducts } from "@/src/data/dashboard";

export function LowStockProducts() {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="mb-5 space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">Low Stock</h2>
        <p className="text-sm text-muted-foreground">
          Products that may need restocking soon.
        </p>
      </div>

      <div className="space-y-3">
        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div className="space-y-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-muted-foreground">Inventory alert</p>
            </div>

            <span className="rounded-full border px-3 py-1 text-sm font-medium">
              {product.stock} left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}