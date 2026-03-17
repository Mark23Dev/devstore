import { StoreFooter } from "@/src/components/store/Footer";
import { StoreNavbar } from "@/src/components/store/Navbar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StoreNavbar />
      <main className="flex-1">{children}</main>
      <StoreFooter />
    </div>
  );
}