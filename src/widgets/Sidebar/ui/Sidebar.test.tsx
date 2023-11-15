import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';
import { componentRenderAll } from 'shared/lib/tests/componentRenderAll/componentRenderAll';

describe('<Sidebar/>', () => {
    test('sidebar', () => {
        componentRenderAll(<Sidebar />);
        const expectedElement = screen.getByTestId('sidebar');
        expect(expectedElement).toBeInTheDocument();
    });

    test('sidebar-toggle', () => {
        componentRenderAll(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle-button');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('opened');
    });
});
