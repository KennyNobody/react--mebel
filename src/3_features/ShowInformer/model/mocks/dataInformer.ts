import { InformerType } from '4_entities/Informer';

const dataInformerClient: InformerType = {
    id: 1,
    title: 'Здесь появятся Ваши заказы',
    content: '<p>Найдите <a href="#">Мебельщиков</a>, подходящих под ваш заказ или создайте свой первый заказ, нажав на кнопку <a href="#">“Создать заказ”</a> в боковом меню слева.</p>',
    area: 'client-orders',
};

const dataInformerWorker: InformerType = {
    id: 1,
    title: 'Вы можете взять не более трёх заказов',
    content: '<p>Чтобы брать больше заказов, вам нужно приобрести <a href="#">Тариф PRO</a>. После приобретения вам будет доступно больше заказов.</p>',
    area: 'worker-orders',
};

export {
    dataInformerClient,
    dataInformerWorker,
};
