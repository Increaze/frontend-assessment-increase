import { Product, ProductsResponse } from '@/types/product';

const BASE_URL = 'https://dummyjson.com';

type GetProductsArgs = {
  page?: number;
  limit?: number;
  q?: string;
  category?: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getProducts({
  page = 1,
  limit = 20,
  q,
  category,
}: GetProductsArgs): Promise<ProductsResponse> {
  const skip = (page - 1) * limit;

  if (q?.trim()) {
    return fetchJson<ProductsResponse>(
      `${BASE_URL}/products/search?q=${encodeURIComponent(q)}&limit=${limit}&skip=${skip}`
    );
  }

  if (category && category !== 'all') {
    return fetchJson<ProductsResponse>(
      `${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
    );
  }

  return fetchJson<ProductsResponse>(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await res.json();

  return data
    .map((item: string | { slug?: string; name?: string }) =>
      typeof item === 'string' ? item : item.slug || item.name || ''
    )
    .filter(Boolean);
}

export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products/${encodeURIComponent(id)}`, {
    next: { revalidate: 600 },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  return res.json();
}