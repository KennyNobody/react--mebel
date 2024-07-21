import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
    test('Container is rendered', () => {
        render(<Container>TEST</Container>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
