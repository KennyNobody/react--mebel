import {
    useState,
    useEffect,
    RefObject,
} from 'react';

const useHeight = (elementRef: RefObject<HTMLElement>, proportion: number) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const width = elementRef?.current?.offsetWidth;

            if (width) setHeight(width * proportion);
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [elementRef, proportion]);

    return height;
};

export default useHeight;
