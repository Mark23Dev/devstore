import Link from "next/link";

type CategoryCardProps = {
  name: string;
  slug: string;
  description: string;
};

export function CategoryCard({
  name,
  slug,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${slug}`}
      className="rounded-xl border bg-background p-5 transition hover:border-foreground/20 hover:shadow-sm"
    >
      <div className="space-y-2">
        <h3 className="font-semibold tracking-tight">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}