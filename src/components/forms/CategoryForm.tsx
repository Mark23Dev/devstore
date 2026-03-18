import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

type CategoryFormValues = {
  name?: string;
  slug?: string;
  description?: string;
};

type CategoryFormProps = {
  mode: "create" | "edit";
  defaultValues?: CategoryFormValues;
};

export function CategoryForm({
  mode,
  defaultValues,
}: CategoryFormProps) {
  const isEdit = mode === "edit";

  return (
    <div className="space-y-8 rounded-2xl border bg-background p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          {isEdit ? "Edit Category" : "Create Category"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {isEdit
            ? "Update the category name, slug, and description."
            : "Add a new category to organize your products."}
        </p>
      </div>

      <div className="grid gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Category Name</Label>
          <Input
            id="name"
            defaultValue={defaultValues?.name ?? ""}
            placeholder="Keyboards"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            defaultValue={defaultValues?.slug ?? ""}
            placeholder="keyboards"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            defaultValue={defaultValues?.description ?? ""}
            placeholder="Describe this category..."
            rows={4}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button>{isEdit ? "Save Changes" : "Create Category"}</Button>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </div>
    </div>
  );
}