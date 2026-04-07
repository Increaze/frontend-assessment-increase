'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CategoryFilter from './category-filter';

type Props = {
  categories: string[];
  initialQuery: string;
  initialCategory: string;
};

export default function SearchControls({
  categories,
  initialQuery,
  initialCategory,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(initialQuery);

  const currentUrlQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const trimmedQuery = query.trim();
    const trimmedUrlQuery = currentUrlQuery.trim();

    if (trimmedQuery === trimmedUrlQuery) {
      return;
    }

    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (trimmedQuery) {
        params.set('q', trimmedQuery);
      } else {
        params.delete('q');
      }

      params.delete('page');

      const nextUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;

      router.replace(nextUrl);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, currentUrlQuery, pathname, router, searchParams]);

  const categoryValue = useMemo(
    () => searchParams.get('category') ?? initialCategory ?? 'all',
    [searchParams, initialCategory]
  );

  function handleCategoryChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== 'all') {
      params.set('category', value);
    } else {
      params.delete('category');
    }

    params.delete('page');

    const nextUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    router.replace(nextUrl);
  }

  return (
    <section className="mb-8 flex flex-col gap-4 md:flex-row">
      <label className="flex-1">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Search
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
        />
      </label>

      <CategoryFilter
        categories={categories}
        value={categoryValue}
        onChange={handleCategoryChange}
      />
    </section>
  );
}