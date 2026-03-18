type StatCardProps = {
  title: string;
  value: string | number;
  description?: string;
};

export function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-semibold tracking-tight">{value}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}