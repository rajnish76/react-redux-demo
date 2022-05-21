import { api } from '../../../apis';
import { responseError } from '../../../js/utils';

export const requestTodoList = async ({ _, rejectWithValue }) => {
	try {
		const response = await api.todo.todoList();
		return response.data;
	} catch (error) {
		return rejectWithValue(responseError(error));
	}
};
