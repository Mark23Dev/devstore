import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { cartItems } from "@/src/data/cart";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { EmptyState } from "@/src/components/shared/EmptyState";
import { CartItem } from "@/src/components/store/CartItem";
import { CartSummary } from "@/src/components/store/CartSummary";

export default function CartPage() {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <PageHeader
        title="Your Cart"
        description="Review your selected items before proceeding to checkout."
      />

      {isEmpty ? (
        <EmptyState
          title="Your cart is empty"
          description="Add products to your cart to continue shopping."
        />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div>
              <Button variant="ghost" asChild>
                <Link href="/products">← Continue Shopping</Link>
              </Button>
            </div>
          </div>

          <CartSummary items={cartItems} />
        </div>
      )}
    </div>
  );
}