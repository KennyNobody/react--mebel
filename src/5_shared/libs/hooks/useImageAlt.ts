import { useState, useEffect } from 'react';
import { ImageType } from '5_shared/types/Image';

const useImageAlt = (data: ImageType | undefined) => {
    const [altText, setAltText] = useState('#');

    useEffect(() => {
        if (!data) return;

        let resultString = '';

        if (data.caption) resultString = data.caption;
        if (data.alternativeText) {
            if (resultString) {
                resultString += ` — ${data.alternativeText}`;
            } else {
                resultString = data.alternativeText;
            }
        }

        setAltText(resultString);
    }, [data]);

    return altText;
};

export {
    useImageAlt,
};
