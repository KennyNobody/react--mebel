interface MediaFormatType {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string;
    url: string;
}

interface Media {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    provider: string;
    createdAt: Date;
    previewUrl: string;
    updatedAt: Date;
    formats: {
        thumbnail: MediaFormatType;
        small: MediaFormatType;
        medium: MediaFormatType;
        large: MediaFormatType;
    };
}

export type {
    Media,
    MediaFormatType,
};
