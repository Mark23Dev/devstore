type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return <div className="space-y-6 p-6">{children}</div>;
}