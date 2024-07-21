interface MediaType {
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

interface ImageType {
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    createdAt: Date;
    url: string;
    ext: string;
    formats?: Record<string, MediaType>;
    hash: string;
    height: number;
    mime: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    size: number;
    updatedAt: Date;
    width: number;
}

export type {
    MediaType,
    ImageType,
};
