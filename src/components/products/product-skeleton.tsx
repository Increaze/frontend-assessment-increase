type Props = {
  count?: number;
};

export default function ProductSkeleton({ count = 8 }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-slate-200 bg-surface shadow-sm"
        >
          <div className="aspect-4/3 animate-pulse bg-slate-200" />
          <div className="space-y-3 p-4">
            <div className="h-5 animate-pulse rounded bg-slate-200" />
            <div className="h-4 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="flex gap-2 pt-2">
              <div className="h-5 w-16 animate-pulse rounded bg-slate-200" />
              <div className="h-5 w-16 animate-pulse rounded bg-slate-200" />
              <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}