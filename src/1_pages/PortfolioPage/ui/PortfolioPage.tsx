import classNames from 'classnames';
import cls from './PortfolioPage.module.scss';

interface PortfolioPageProps {
    className?: string
}

export const PortfolioPage = (props: PortfolioPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PortfolioPage, className)}>
            Страница портфолио
        </div>
    );
};
