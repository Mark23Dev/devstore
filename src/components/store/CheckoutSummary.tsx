import { CartItem } from "@/src/types/cart";
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";

type CheckoutSummaryProps = {
  items: CartItem[];
};

export function CheckoutSummary({ items }: CheckoutSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? 1500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="space-y-6 rounded-2xl border bg-background p-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">Order Summary</h2>
        <p className="text-sm text-muted-foreground">
          Review your order before placing it.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="font-medium leading-none">{item.product.name}</p>
              <p className="text-sm text-muted-foreground">
                Qty: {item.quantity}
              </p>
            </div>
            <p className="text-sm font-medium">
              {formatCurrency(item.product.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t pt-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <Button className="w-full" size="lg">
        Place Order
      </Button>
    </div>
  );
}