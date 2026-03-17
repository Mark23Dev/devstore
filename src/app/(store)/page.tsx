import { FeaturedCategories } from "@/src/components/store/FeaturedCategories";
import { FeaturedProducts } from "@/src/components/store/FeaturedProducts";
import { HeroSection } from "@/src/components/store/HeroSection";
import { StoreCTA } from "@/src/components/store/StoreCTA";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <StoreCTA />
    </>
  );
}