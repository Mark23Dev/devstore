import { DashboardShell } from "@/src/components/dashboard/DashboardShell";
import { ProductForm } from "@/src/components/forms/ProductForm";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { products } from "@/src/data/products";
import { notFound } from "next/navigation";


type EditProductPageProps = {
  params: {
    id: string;
  };
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;
  const product =  products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <DashboardShell>
      <PageHeader
        title="Edit Product"
        description="Update product information and inventory details."
      />

      <ProductForm
        mode="edit"
        defaultValues={{
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          brand: product.brand,
          stock: product.stock,
          category: product.category,
          image: product.image,
        }}
      />
    </DashboardShell>
  );
}