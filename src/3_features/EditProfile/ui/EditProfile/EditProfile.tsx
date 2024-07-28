import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getUserData, UserType } from '4_entities/User';
import { ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import { ButtonRegular } from '5_shared/ui/ButtonRegular/ButtonRegular';
import cls from './EditProfile.module.scss';
import { EditSex } from '../EditSex/EditSex';
import { EditMore } from '../EditMore/EditMore';
import { EditInfo } from '../EditInfo/EditInfo';
import { EditAvatar } from '../EditAvatar/EditAvatar';
import { EditSocials } from '../EditSocials/EditSocials';
import { EditDiscount } from '../EditDiscount/EditDiscount';
import { EditCheckboxes } from '../EditCheckboxes/EditCheckboxes';

interface EditProfileProps {
    className?: string;
}

export const EditProfile = (props: EditProfileProps) => {
    const { className } = props;

    const updateEvent = () => {
        alert('Обновляем данные формы');
    };

    const data: UserType | undefined = useSelector(getUserData);

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.stack)}>
                <EditAvatar />
                <EditInfo />
                <EditSex />
                {
                    data?.role === 'worker'
                    && (
                        <>
                            <EditSocials />
                            <EditDiscount code="12345678" />
                            <EditMore />
                            <EditCheckboxes />
                        </>
                    )
                }

                <ButtonRegular
                    caption="Сохранить"
                    handleClick={updateEvent}
                    theme={ButtonLinkTheme.GREEN}
                    className={classNames(cls.button)}
                />
            </div>

        </div>
    );
};
