import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById } from '@/lib/api/products';

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
  const { id } = await params;

  try {
    const product = await getProductById(id);

    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-6 text-sm text-text">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span>{product.title}</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
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
            <p className="mb-2 text-sm uppercase tracking-wide text-text">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-text-strong tracking-tight">{product.title}</h1>
            <p className="mt-4 text-text">{product.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <span className="block text-text">Price</span>
                <strong>${product.price}</strong>
              </div>
              <div className="rounded-xl border p-4">
                <span className="block text-text">Rating</span>
                <strong>{product.rating}</strong>
              </div>
              <div className="rounded-xl border p-4">
                <span className="block text-text">Stock</span>
                <strong>{product.stock}</strong>
              </div>
              <div className="rounded-xl border p-4">
                <span className="block text-text">Brand</span>
                <strong>{product.brand ?? 'N/A'}</strong>
              </div>
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-lg border px-4 py-2"
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