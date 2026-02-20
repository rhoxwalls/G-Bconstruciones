/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import Header from '../Screens/Header.tsx';

describe('Header Component', () => {
  it('debe mostrar el nombre de la empresa "Constructora MVP"', () => {
    render(<Header />);
    const title = screen.getByText(/Constructora MVP/i);
    expect(title).toBeInTheDocument();
  });
});