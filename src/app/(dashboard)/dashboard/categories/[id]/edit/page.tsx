import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { CategoryForm } from "@/src/components/forms/CategoryForm";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { categories } from "@/src/data/categories";
import { notFound } from "next/navigation";


type EditCategoryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const { id } = await params
  const category = categories.find((item) => item.id === id);

  if (!category) {
    notFound();
  }

  return (
    <DashboardShell>
      <PageHeader
        title="Edit Category"
        description="Update category details and organization."
      />

      <CategoryForm
        mode="edit"
        defaultValues={{
          name: category.name,
          slug: category.slug,
          description: category.description,
        }}
      />
    </DashboardShell>
  );
}