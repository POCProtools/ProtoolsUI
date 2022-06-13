import { fetcher } from 'core/fetchData/fetchData';
import { getEnvVar } from 'core/fetchData/env';

export const getRequest = (endpoint) => {
	const apiUrl = getEnvVar('API_URL');
	const url = apiUrl + endpoint;
	return fetcher(url, 'GET', null);
};
