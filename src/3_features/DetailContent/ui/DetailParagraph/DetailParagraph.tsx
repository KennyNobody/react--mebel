import { ReactNode } from 'react';
import { EditorWrapper } from '5_shared/ui/EditorWrapper/EditorWrapper';

interface DetailParagraphProps {
    children: ReactNode;
}

export const DetailParagraph = (props: DetailParagraphProps) => {
    const {
        children,
    } = props;

    return (
        <EditorWrapper>
            <p>{ children }</p>
        </EditorWrapper>
    );
};
