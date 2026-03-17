import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you’re looking for does not exist or may have been moved.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}