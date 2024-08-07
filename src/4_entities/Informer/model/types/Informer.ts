type InformerArea = 'client-orders' | 'worker-orders';

interface InformerType {
    id: number;
    title: string;
    content: string;
    area: InformerArea;
}

export {
    type InformerArea,
    type InformerType,
};
