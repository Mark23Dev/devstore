import { Button } from "@/src/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <p className="text-sm text-muted-foreground">Admin Dashboard</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">View Store</Button>
      </div>
    </header>
  );
}