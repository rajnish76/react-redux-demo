import axios from 'axios';

// const ENDPOINT = 'user/';

export default {

	todoList() {
		return axios.get('https://jsonplaceholder.typicode.com/todos');
	}

	// logout() {
	// 	return http.get(`${ ENDPOINT }logout`);
	// }
};
