import { ProductGallery } from "@/src/components/store/ProductGallery";
import { ProductInfo } from "@/src/components/store/ProductInfo";
import { RelatedProducts } from "@/src/components/store/RelatedProducts";
import { products } from "@/src/data/products";
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto space-y-16 px-4 py-10">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <ProductGallery name={product.name} />
        <ProductInfo product={product} />
      </section>

      <section className="rounded-2xl border bg-background p-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Product details
          </h2>
          <p className="max-w-3xl leading-7 text-muted-foreground">
            {product.description}
          </p>
        </div>
      </section>

      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
        products={products}
      />
    </div>
  );
}