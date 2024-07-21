import { useLocation } from 'react-router-dom';
import { PageLayoutMode, routeConfig } from '5_shared/config/router/routerConfig';
import { replaceUrlToPattern } from '5_shared/libs/helpers/replaceUrlToPattern/replaceUrlToPattern';

const useLayoutModeKey = (): string => {
    const location = useLocation();
    const pattern = replaceUrlToPattern(location.pathname);
    const el = routeConfig.find((item) => item.path === pattern);

    return el?.layoutMode || PageLayoutMode.STATIC;
};

export default useLayoutModeKey;
