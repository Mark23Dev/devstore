import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { PageHeader } from "@/src/components/shared/PageHeader";


type OrderDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function OrderDetailsPage({
  params,
}: OrderDetailsPageProps) {
  return (
    <DashboardShell>
      <PageHeader
        title={`Order ${params.id}`}
        description="View order details, customer information, and fulfillment progress."
      />

      <div className="rounded-2xl border bg-background p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Order details UI will be built in a later step.
        </p>
      </div>
    </DashboardShell>
  );
}