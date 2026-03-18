import Link from "next/link";
import { categories } from "@/src/data/categories";
import { Button } from "@/src/components/ui/button";

export function CategoriesTable() {
  if (!categories.length) {
    return (
      <div className="rounded-2xl border border-dashed bg-background p-10 text-center">
        <h3 className="text-lg font-medium">No categories available</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Add your first category to organize products in the store.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="border-b bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b last:border-0">
                <td className="px-4 py-4 font-medium">{category.name}</td>
                <td className="px-4 py-4 text-muted-foreground">
                  {category.slug}
                </td>
                <td className="px-4 py-4 text-muted-foreground">
                  {category.description}
                </td>
                <td className="px-4 py-4 text-right">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/categories/${category.id}/edit`}>
                      Edit
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}