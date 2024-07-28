import React from 'react';
import classNames from 'classnames';
import { FieldsGroup } from '5_shared/ui/FieldsGroup/FieldsGroup';
import cls from './EditCheckboxes.module.scss';
import { profileData } from '../../model/mocks/data';

interface EditCheckboxesProps {
    className?: string;
}

export const EditCheckboxes = (props: EditCheckboxesProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
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
        </div>
    );
};
