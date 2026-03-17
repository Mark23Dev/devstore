import { CartItem as CartItemType } from "@/src/types/cart";
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const total = item.product.price * item.quantity;

  return (
    <div className="flex gap-4 rounded-xl border bg-background p-4">
      <div className="h-24 w-24 shrink-0 rounded-lg bg-muted" />

      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row">
        <div className="space-y-2">
          <div>
            <p className="text-xs text-muted-foreground">{item.product.category}</p>
            <h3 className="font-semibold tracking-tight">{item.product.name}</h3>
            <p className="text-sm text-muted-foreground">{item.product.brand}</p>
          </div>

          <p className="text-sm text-muted-foreground">
            Unit price: {formatCurrency(item.product.price)}
          </p>
        </div>

        <div className="flex min-w-[140px] flex-col items-start justify-between gap-3 sm:items-end">
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <Button variant="ghost" size="icon" className="h-7 w-7">
              -
            </Button>
            <span className="text-sm font-medium">{item.quantity}</span>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              +
            </Button>
          </div>

          <p className="font-semibold">{formatCurrency(total)}</p>

          <Button variant="ghost" className="px-0 text-sm text-destructive">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}