import classNames from 'classnames';
import { File } from '4_entities/File';
import { PictureOrder } from '4_entities/Picture';
import IconPosition from '5_shared/assets/icons/edit.svg';
import { TextBlock } from '5_shared/ui/TextBlock/TextBlock';
import { ButtonRegular } from '5_shared/ui/ButtonRegular/ButtonRegular';
import { ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import { OrderType } from '../../model/types/Order';
import cls from './OrderInfo.module.scss';

interface OrderInfoProps {
    className?: string;
    data: OrderType;
}

export const OrderInfo = (props: OrderInfoProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            {
                data?.title
                && (
                    <TextBlock
                        title="Название заказа"
                        content={data.title}
                    />
                )
            }
            {
                data?.typeOrder
                && (
                    <TextBlock
                        title="Тип изделия"
                        content={data.typeOrder}
                    />
                )
            }
            {
                data?.priceSegment
                && (
                    <TextBlock
                        title="Ценовой сегмент"
                        content={data.priceSegment}
                    />
                )
            }
            {
                data?.typeWork
                && (
                    <TextBlock
                        title="Вид работы"
                        content={data.typeWork}
                    />
                )
            }
            {
                data?.style
                && (
                    <TextBlock
                        title="Стиль мебели"
                        content={data.style}
                    />
                )
            }
            {
                data?.orderDescription
                && (
                    <TextBlock
                        title="Описание заказа"
                        content={data.orderDescription}
                    />
                )
            }
            <div className={classNames(cls['grid-files'])}>
                {
                    data.files.map((item) => (
                        <File
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
            <div className={classNames(cls['grid-files'])}>
                {
                    data.gallery.map((item) => (
                        <PictureOrder
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
            <ButtonRegular
                contentPosition="right"
                caption="Редактировать заказ"
                theme={ButtonLinkTheme.GREEN}
                className={classNames(cls.button)}
            >
                <IconPosition className={classNames(cls.iconButton)} />
            </ButtonRegular>
        </div>
    );
};
