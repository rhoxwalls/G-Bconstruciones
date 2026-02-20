/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import {MemoryRouter } from 'react-router-dom';
import App from '../App';


describe('App', () => {
  test('debe renderizar el titulo de la constructora en el Hero', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText('Los cimientos de tu futuro')).toBeInTheDocument();
})
    test('debe tenet un enlace a proyectos en el nav', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const link = screen.getByRole('link', { name: /Proyectos/i });
        expect(link).toBeInTheDocument();
  })

})
