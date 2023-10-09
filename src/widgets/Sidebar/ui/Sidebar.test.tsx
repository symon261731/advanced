import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('<Sidebar/>', () => {
    test('sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const expectedElement = screen.getByTestId('sidebar');
        expect(expectedElement).toBeInTheDocument();
    });

    test('sidebar-toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle-button');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('opened');
    });
});