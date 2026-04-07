import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById } from '@/lib/api/products';
import Breadcrumbs from '@/components/products/breadcrumbs';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  try {
    const product = await getProductById(id);

    return {
      title: `${product.title} | Content Explorer`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: product.images?.[0] ? [product.images[0]] : [],
      },
    };
  } catch {
    return {
      title: 'Product | Content Explorer',
      description: 'Browse product details.',
    };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = params;

  try {
    const product = await getProductById(id);

    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Products', href: '/products' },
            { label: product.title },
          ]}
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <Image
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <section>
            <p className="mb-2 text-sm uppercase tracking-wide text-text-muted">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-text-strong">
              {product.title}
            </h1>

            <p className="mt-4 text-text">
              {product.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-border bg-surface p-4 shadow-card">
                <span className="block text-text-muted">Price</span>
                <strong className="text-text-strong">${product.price}</strong>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 shadow-card">
                <span className="block text-text-muted">Rating</span>
                <strong className="text-text-strong">{product.rating}</strong>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 shadow-card">
                <span className="block text-text-muted">Stock</span>
                <strong className="text-text-strong">{product.stock}</strong>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 shadow-card">
                <span className="block text-text-muted">Brand</span>
                <strong className="text-text-strong">{product.brand ?? 'N/A'}</strong>
              </div>
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-lg border border-border bg-surface px-4 py-2 text-text transition hover:bg-surface-muted"
            >
              Back to products
            </Link>
          </section>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}