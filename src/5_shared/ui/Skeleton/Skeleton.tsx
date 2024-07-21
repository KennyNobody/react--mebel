import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './Skeleton.module.scss';

export enum SkeletonMode {
    BLOCK,
    LINES,
}

interface SkeletonProps {
    strings?: number;
    className?: string;
    mode: SkeletonMode;
    themeProp?: AppTheme;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        mode,
        strings = 5,
        className,
        themeProp,
    } = props;

    const { theme } = useTheme();

    if (mode === SkeletonMode.BLOCK) {
        return (
            <div
                className={
                    classNames(
                        cls.block,
                        cls[`block--${themeProp || theme}`],
                        className,
                    )
                }
            />
        );
    }

    return (
        <div className={classNames(cls.lines, className)}>
            {
                new Array(strings).fill(null).map((_, index) => (
                    <span
                        key={index}
                        className={
                            classNames(
                                cls.wrapper,
                            )
                        }
                    >
                        &nbsp;
                        <span
                            className={
                                classNames(
                                    cls.inner,
                                    cls[`inner--${themeProp || theme}`],
                                )
                            }
                        />
                    </span>
                ))
            }
        </div>
    );
};
