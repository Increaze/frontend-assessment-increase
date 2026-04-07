import Link from 'next/link';

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition hover:text-text"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-strong">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="text-text-muted">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}