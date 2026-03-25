import type { Product } from "@/types";
import DealCard from "./DealCard";

interface CollectionGridProps {
  products: Product[];
  campaignId: string;
  pageSlug: string;
}

export default function CollectionGrid({
  products,
  campaignId,
  pageSlug,
}: CollectionGridProps) {
  // Golden Rule 2: Max 7 DealCards per collection page
  const displayProducts = products.slice(0, 7);

  return (
    <section className="my-8">
      <div className="grid gap-6">
        {displayProducts.map((product) => (
          <DealCard
            key={product.id}
            product={product}
            campaignId={campaignId}
            pageSlug={pageSlug}
          />
        ))}
      </div>
    </section>
  );
}
