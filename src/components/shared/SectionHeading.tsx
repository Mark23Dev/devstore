type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}