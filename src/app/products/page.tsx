import { getCategories, getProducts } from "@/lib/api/products";
import ProductGrid from "@/components/products/product-grid";
import SearchControls from "@/components/products/search-controls";
import Pagination from "@/components/products/pagination";
import EmptyState from "@/components/products/empty-state";

type Props = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  const q = params.q?.trim() || "";
  const category = params.category?.trim() || "all";
  const page = Math.max(Number(params.page) || 1, 1);

  const [productsData, categories] = await Promise.all([
    getProducts({ page, limit: 20, q, category }),
    getCategories(),
  ]);

  const totalPages = Math.ceil(productsData.total / productsData.limit);

  return (
    <main className="mx-auto max-w-7xl  text-text px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-strong">
          Content Explorer
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Browse, search, and filter products.
        </p>
      </div>

      <SearchControls
        categories={categories}
        initialQuery={q}
        initialCategory={category}
      />

      {productsData.products.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try a different search term or category."
        />
      ) : (
        <>
          <ProductGrid products={productsData.products} />
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      )}
    </main>
  );
}
