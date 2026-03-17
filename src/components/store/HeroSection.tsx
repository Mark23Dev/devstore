import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export function HeroSection() {
  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Developer gear for focused work
          </div>

          <div className="space-y-3">
            <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build your ideal developer workspace.
            </h1>
            <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
              DevStore brings together premium keyboards, displays, accessories,
              and tech essentials for developers who care about productivity and
              clean setups.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-muted/40" />
        </div>
      </div>
    </section>
  );
}