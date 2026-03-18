
import { CheckoutForm } from "@/src/components/forms/CheckoutForm";
import { EmptyState } from "@/src/components/shared/EmptyState";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { CheckoutSummary } from "@/src/components/store/CheckoutSummary";
import { Button } from "@/src/components/ui/button";
import { cartItems } from "@/src/data/cart";
import Link from "next/link";

export default function CheckoutPage() {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <PageHeader
        title="Checkout"
        description="Complete your order details and review your purchase."
      />

      {isEmpty ? (
        <EmptyState
          title="No items available for checkout"
          description="Your cart is empty. Add products before proceeding."
          action={
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          }
        />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <CheckoutForm />
          <CheckoutSummary items={cartItems} />
        </div>
      )}
    </div>
  );
}