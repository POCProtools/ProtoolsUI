import { fetcher } from 'core/fetchData/fetchData';

export const getRequest = (url) => fetcher(url, 'GET', null);
