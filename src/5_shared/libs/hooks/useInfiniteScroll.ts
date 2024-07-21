import {
    useEffect,
    MutableRefObject,
} from 'react';

export interface useInfiniteScrollOptions {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef }: useInfiniteScrollOptions): void {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement: HTMLElement = triggerRef.current;

        if (callback && triggerElement) {
            const options = {
                root: document,
                rootMargin: '-1px 0px 0px 0px',
                threshold: [1],
            };

            observer = new IntersectionObserver(([el]: IntersectionObserverEntry[]): void => {
                if (el.isIntersecting) callback();
            }, options);

            observer.observe(triggerElement);
        }

        return (): void => {
            if (observer) observer?.disconnect();
        };
    }, [callback, triggerRef]);
}
