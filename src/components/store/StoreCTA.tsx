import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export function StoreCTA() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="rounded-2xl border bg-muted/40 p-8 md:p-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            Upgrade your setup with tools built for serious work.
          </h2>
          <p className="text-muted-foreground">
            Explore premium keyboards, displays, accessories, and books designed
            to help developers work better and focus longer.
          </p>
          <Button asChild>
            <Link href="/products">Explore the Store</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}