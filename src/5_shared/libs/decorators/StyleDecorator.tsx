import '@/0_app/styles/index.scss';
import { ReactNode } from 'react';

interface StyleDecoratorProps {
    children: ReactNode;
}

export const StyleDecorator = ({ children }: StyleDecoratorProps) => (
    <div className="body">
        { children }
    </div>
);
