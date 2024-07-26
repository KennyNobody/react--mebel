import { dataUser } from '4_entities/User';
import React from 'react';
import classNames from 'classnames';
import { ButtonRegular } from '5_shared/ui/ButtonRegular/ButtonRegular';
import { ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import cls from './EditProfile.module.scss';
import { EditSex } from '../EditSex/EditSex';
import { EditInfo } from '../EditInfo/EditInfo';
import { profileData } from '../../model/mocks/data';
import { EditAvatar } from '../EditAvatar/EditAvatar';
import {FieldsGroup} from "5_shared/ui/FieldsGroup/ui/FieldsGroup";

interface EditProfileProps {
    className?: string
}

export const EditProfile = (props: EditProfileProps) => {
    const { className } = props;

    const updateEvent = () => {
        alert('Обновляем данные формы');
    };

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.stack)}>
                {
                    dataUser?.picture
                    && (
                        <EditAvatar picture={dataUser.picture} />
                    )
                }

                <EditInfo data={dataUser} />
                <EditSex data={dataUser.sex || ''} />
                <div className={classNames(cls.columns)}>
                    {
                        profileData.items.map((item) => (
                            <FieldsGroup
                                data={item}
                                key={item.id}
                            />
                        ))
                    }
                </div>
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
