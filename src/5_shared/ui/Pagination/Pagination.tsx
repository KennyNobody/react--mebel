import classNames from 'classnames';
import { ReactElement } from 'react';
import IconLeft from '5_shared/assets/icons/arrow-button-left.svg';
import IconRight from '5_shared/assets/icons/arrow-button-right.svg';
import { ButtonRegular } from '5_shared/ui/ButtonRegular/ButtonRegular';
import { ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import cls from './Pagination.module.scss';

interface PaginationProps {
    className?: string;
    currentPage: number;
    lastPage: number;
    clickEvent?: (num: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const {
        lastPage,
        currentPage,
        className,
        clickEvent,
    } = props;

    const buttonEvent = (num: number) => {
        if (clickEvent) clickEvent(num);
    };

    if (lastPage <= 1) return null;

    const renderPages = () => {
        const pages: ReactElement[] = [];

        pages.push(
            <button
                key="prev"
                type="button"
                disabled={currentPage === 1}
                aria-label="предыдущая страница"
                className={classNames(cls.button)}
                onClick={() => buttonEvent(currentPage - 1)}
            >
                <IconLeft
                    className={classNames(cls.icon)}
                />
            </button>,
        );

        const leftBoundary = Math.max(currentPage - 2, 1);
        const rightBoundary = Math.min(currentPage + 2, lastPage);

        if (leftBoundary > 1) {
            pages.push(<span className={classNames(cls.dots)}>...</span>);
        }

        for (let i = leftBoundary; i <= rightBoundary; i += 1) {
            pages.push(
                <button
                    key={i}
                    type="button"
                    onClick={() => buttonEvent(i)}
                    aria-label={`перейти к странице номер: ${i}`}
                    className={
                        classNames(
                            cls.button,
                            { [cls.active]: i === currentPage },
                        )
                    }
                >
                    { i }
                </button>,
            );
        }

        if (rightBoundary < lastPage) {
            pages.push(<span className={classNames(cls.dots)}>...</span>);
        }

        pages.push(
            <button
                key="next"
                type="button"
                aria-label="следующая страница"
                disabled={currentPage === lastPage}
                className={classNames(cls.button)}
                onClick={() => buttonEvent(currentPage + 1)}
            >
                <IconRight
                    className={classNames(cls.icon)}
                />
            </button>,
        );

        return pages;
    };

    return (
        <div className={classNames(cls.block)}>
            <nav className={classNames(cls.nav, className)}>
                {renderPages()}
            </nav>
            {
                currentPage < lastPage
                && (
                    <ButtonRegular
                        caption="Показать еще"
                        theme={ButtonLinkTheme.GREEN}
                        className={classNames(cls['button-more'])}
                        handleClick={() => buttonEvent(currentPage + 1)}
                    />
                )
            }
        </div>
    );
};
