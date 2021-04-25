import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('renderiza dashboard com sucesso', () => {
  render(<Dashboard />);
  expect(screen.getByTestId('dashboard')).toBeInTheDocument();
});
