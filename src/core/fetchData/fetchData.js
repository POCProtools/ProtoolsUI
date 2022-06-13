import axios from 'axios';

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
	'Access-Control-Allow-Headers': '*',
};
export const fetcherGet = (url) => {
	return axios.get(url, {
		mode: 'cors',
		headers: headers,
	});
};
