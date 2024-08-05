type FavoriteMode = 'add' | 'remove';
type FavoriteType = 'worker' | 'project';

interface FavoriteRequestType {
    id: number;
    type: FavoriteType;
    mode: FavoriteMode;
}

export {
    type FavoriteType,
    type FavoriteMode,
    type FavoriteRequestType,
};
