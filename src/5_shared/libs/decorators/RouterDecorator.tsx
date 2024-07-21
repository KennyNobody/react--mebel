import '@/0_app/styles/index.scss';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface StyleDecoratorProps {
    children: ReactNode;
}

export const RouterDecorator = ({ children }: StyleDecoratorProps) => (
    <BrowserRouter>
        { children }
    </BrowserRouter>
);
