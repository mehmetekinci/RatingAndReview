import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('shows the header of card', () => {
  render(<Card header='Sun of the West' reviews={[]} />);

  expect(screen.getByText('Sun of the West')).toBeInTheDocument();
});

test('shows correct rating info', () => {
  render(<Card rating='5' reviews={[]} />);

  expect(screen.getByTestId('rating')).toHaveTextContent(
    '5 | 0 users rated this!'
  );
});
