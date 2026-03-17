import Link from "next/link";
import { CartItem } from "@/src/types/cart";
import { formatCurrency } from "@/src/lib/format";
import { Button } from "@/src/components/ui/button";

type CartSummaryProps = {
  items: CartItem[];
};

export function CartSummary({ items }: CartSummaryProps) {
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
          Review your totals before checkout.
        </p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full" size="lg" asChild>
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>

        <Button variant="outline" className="w-full" asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}