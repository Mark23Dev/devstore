import { DashboardHeader } from "@/src/components/dashboard/Header";
import { DashboardSidebar } from "@/src/components/dashboard/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}