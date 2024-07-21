import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Toggler } from '5_shared/ui/Toggler/Toggler';
import { LangEngineType, LangShownType } from '5_shared/types/CommonTypes';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        const isChecked = e.target.checked;

        i18n.changeLanguage(isChecked ? LangEngineType.EN : LangEngineType.RU);
    };

    return (
        <Toggler
            changeEvent={changeLanguage}
            arr={[LangShownType.RU, LangShownType.EN]}
            isChecked={i18n.language === LangEngineType.EN}
            className={classNames(cls.toggler, className)}
        />
    );
});
