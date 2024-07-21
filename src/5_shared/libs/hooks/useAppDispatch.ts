import { useDispatch } from 'react-redux';
import { AppDispatch } from '0_app/prodivers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
