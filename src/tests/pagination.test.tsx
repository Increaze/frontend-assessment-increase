import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '@/components/products/pagination';
import { vi } from 'vitest';

const push = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
  usePathname: () => '/products',
  useSearchParams: () =>
    new URLSearchParams('q=phone&category=smartphones'),
}));

describe('Pagination', () => {
  beforeEach(() => {
    push.mockClear();
  });

  it('pushes the next page while preserving existing query params', () => {
    render(<Pagination currentPage={1} totalPages={3} />);

    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(push).toHaveBeenCalledWith(
      '/products?q=phone&category=smartphones&page=2'
    );
  });

  it('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={3} />);

    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeDisabled();
  });
});