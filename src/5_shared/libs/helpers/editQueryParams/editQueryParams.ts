import queryString, { ParsedQuery } from 'query-string';
import { RequestParams } from '5_shared/types/RequestData';

export function getQueryParams(): RequestParams {
    const params: string = window.location.search;
    const parsedParams: ParsedQuery<string | number> = queryString.parse(params);

    return parsedParams as RequestParams;
}

const setQueryParams = (params: RequestParams): void => {
    const currentUrl = queryString.parseUrl(window.location.href);
    const paramsString = queryString.stringify(params, { encode: false });
    const newUrl = `${currentUrl.url}?${paramsString}`;
    window.history.replaceState(null, '', newUrl);
};

export {
    setQueryParams,
};
