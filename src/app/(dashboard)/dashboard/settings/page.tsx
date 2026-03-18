import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { StoreSettingsForm } from "@/src/components/forms/StoreSettingsForm";
import { PageHeader } from "@/src/components/shared/PageHeader";


export default function DashboardSettingsPage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Settings"
        description="Manage your store information and configuration."
      />

      <StoreSettingsForm />
    </DashboardShell>
  );
}