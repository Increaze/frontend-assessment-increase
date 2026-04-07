import ProductSkeleton from '@/components/products/product-skeleton';

export default function LoadingProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 space-y-3">
        <div className="h-8 w-56 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-80 animate-pulse rounded bg-slate-200" />
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_16rem]">
        <div className="h-12 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-12 animate-pulse rounded-lg bg-slate-200" />
      </div>

      <ProductSkeleton count={8} />
    </main>
  );
}