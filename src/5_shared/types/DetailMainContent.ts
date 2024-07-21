import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { ImageType } from '5_shared/types/Image';

interface DetailMainType {
    id: number;
    preview?: {
        data: ImageType;
    },
    showPreview: boolean;
    previewTitle: string;
    previewCaption: string;
    previewInverted: boolean;
    content: BlocksContent;
}

export {
    type DetailMainType,
};
