import { configureStore } from '@reduxjs/toolkit';

import { fakeReducer } from './slice';

export const store = configureStore({
	reducer: {
		fake: fakeReducer
	}
});
