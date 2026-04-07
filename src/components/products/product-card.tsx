import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const image = product.thumbnail || product.images?.[0];

  return (
    <Link href={`/products/${product.id}`}>
      <article className="overflow-hidden rounded-xl border bg-surface shadow-sm hover:shadow-md transition">
        <div className="relative aspect-4/3 bg-gray-100">
          {image ? (
            <Image
              src={image}
              alt={product.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-text-muted">
              No Image
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h2 className="font-semibold line-clamp-1">
            {product.title}
          </h2>

          <p className="text-sm text-text-muted line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-text-muted">
            <span>${product.price}</span>
            <span>⭐ {product.rating}</span>
            <span>{product.category}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}