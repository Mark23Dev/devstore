type ProductGalleryProps = {
  name: string;
};

export function ProductGallery({ name }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-2xl border bg-muted" />
      <div className="grid grid-cols-4 gap-3">
        <div className="aspect-square rounded-xl border bg-muted/70" />
        <div className="aspect-square rounded-xl border bg-muted/70" />
        <div className="aspect-square rounded-xl border bg-muted/70" />
        <div className="aspect-square rounded-xl border bg-muted/70" />
      </div>
      <p className="text-sm text-muted-foreground">
        Preview area for {name}
      </p>
    </div>
  );
}