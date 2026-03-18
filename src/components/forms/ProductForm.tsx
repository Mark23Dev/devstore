import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { categories } from "@/src/data/categories";

type ProductFormValues = {
  name?: string;
  slug?: string;
  description?: string;
  price?: number;
  brand?: string;
  stock?: number;
  category?: string;
  image?: string;
};

type ProductFormProps = {
  mode: "create" | "edit";
  defaultValues?: ProductFormValues;
};

export function ProductForm({
  mode,
  defaultValues,
}: ProductFormProps) {
  const isEdit = mode === "edit";

  return (
    <div className="space-y-8 rounded-2xl border bg-background p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          {isEdit ? "Edit Product" : "Create Product"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {isEdit
            ? "Update your product information and inventory details."
            : "Add a new product to your store catalog."}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            defaultValue={defaultValues?.name ?? ""}
            placeholder="Keychron K2 Wireless Keyboard"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            defaultValue={defaultValues?.slug ?? ""}
            placeholder="keychron-k2-wireless-keyboard"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            defaultValue={defaultValues?.description ?? ""}
            placeholder="Describe the product..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price (KES)</Label>
          <Input
            id="price"
            type="number"
            defaultValue={defaultValues?.price ?? ""}
            placeholder="12999"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stock">Stock</Label>
          <Input
            id="stock"
            type="number"
            defaultValue={defaultValues?.stock ?? ""}
            placeholder="12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            defaultValue={defaultValues?.brand ?? ""}
            placeholder="Keychron"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            defaultValue={defaultValues?.category ?? ""}
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            defaultValue={defaultValues?.image ?? ""}
            placeholder="/images/products/example.jpg"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button>{isEdit ? "Save Changes" : "Create Product"}</Button>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </div>
    </div>
  );
}