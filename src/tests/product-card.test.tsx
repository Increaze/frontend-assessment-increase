import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/products/product-card';

describe('ProductCard', () => {
  it('renders title and metadata', () => {
    render(
      <ProductCard
        product={{
          id: 1,
          title: 'iPhone Test',
          description: 'A phone',
          category: 'smartphones',
          price: 999,
          discountPercentage: 0,
          rating: 4.7,
          stock: 12,
          thumbnail: '/test.png',
          images: ['/test.png'],
        }}
      />
    );

    expect(screen.getByText('iPhone Test')).toBeInTheDocument();
    expect(screen.getByText('$999')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.7')).toBeInTheDocument();
  });
});