interface PaginationType {
    pageNow: number; // Номер текущей страницы
    pageSize: number; // Количество элементов на странице
    pageCount: number; // Количество страниц
    total: number; // Количество записей
}

export {
    type PaginationType,
};
