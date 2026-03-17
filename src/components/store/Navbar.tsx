import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { storeNavItems } from "@/src/config/store-nav";
import { Logo } from "../shared/Logo";

export function StoreNavbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {storeNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/cart">Cart</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}