import {
    useState,
    useEffect,
    MutableRefObject, useRef,
} from 'react';

export interface useStickyObserverOptions {
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useStickyObserver() {
    const ref = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;

        const options = {
            root: document,
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1],
        };

        const callbackEvent = ([el]: IntersectionObserverEntry[]): void => {
            setIsSticky(el.intersectionRatio < 1);
        };

        if (ref.current) {
            observer = new IntersectionObserver(callbackEvent, options);
            observer.observe(ref.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return { ref, isSticky };
}
