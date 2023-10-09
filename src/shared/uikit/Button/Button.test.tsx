import { render, screen } from '@testing-library/react';
import { Button } from 'shared/uikit/Button/Button';

describe('Button', () => {
    test('first test', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toBeInTheDocument();
    });
});
