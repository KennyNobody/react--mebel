import { ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import cls from './Editor.module.scss';

interface EditorProps {
    data?: string;
    className?: string;
    children?: ReactNode;
    themeProp?: AppTheme;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        children,
        themeProp,
        className,
    } = props;

    const { theme } = useTheme();

    if (data) {
        return (
            <div
                className={classNames(cls.editor, cls[`editor--${themeProp || theme}`], className)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        );
    }

    return (
        <div className={classNames(cls.editor, cls[`editor--${themeProp || theme}`], className)}>
            { children }
        </div>
    );
};
