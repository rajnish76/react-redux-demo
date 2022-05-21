import axios from 'axios';

import { paramsSerializer } from '../js/utils';

const http = axios.create({
	baseURL: '/api/',
	paramsSerializer
});

http.interceptors.request.use(
	config => {
		const userHeaders = {};

		// userHeaders['authorization'] = bearerAuth(token);

		config.headers = {
			...config.headers,
			...userHeaders
		};
		return config;
	},
	error => Promise.reject(error)
);

http.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		throw error;
	}
);

// function bearerAuth(token) {
// 	return `Bearer ${ token }`;
// }

export default http;
