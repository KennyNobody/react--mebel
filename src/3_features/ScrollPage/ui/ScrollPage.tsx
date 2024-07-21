import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollPageProps {
    children: ReactNode;
}

export const ScrollPage = ({ children }: ScrollPageProps) => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const parentNode: Element | null = document.documentElement;

            if (parentNode && parentNode.scrollTop > 0) {
                parentNode.scrollTo(0, 0);
            }
        }
    }, [location]);

    return children;
};
