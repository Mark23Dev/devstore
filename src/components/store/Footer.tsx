import { siteConfig } from "@/src/config/site";

export function StoreFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.description}</p>
        </div>
      </div>
    </footer>
  );
}