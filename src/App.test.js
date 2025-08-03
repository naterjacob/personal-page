import { render, screen } from '@testing-library/react';
import App from './App';

test('renders filter bar', () => {
  render(<App />);
  const label = screen.getByText(/filter by category/i);
  expect(label).toBeInTheDocument();
});
