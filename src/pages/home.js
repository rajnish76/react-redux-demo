import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { todoList } from '../redux/slice';

export default function Home() {
	const dispatch = useDispatch();
	const todo = useSelector(state => state.fake);

	useEffect(() => {
		dispatch(todoList());
	}, []);

	return (
		<div>
			{todo.loading && <div>Loading...</div>}
			{!!todo.error && <div>{todo.error}</div>}
			{todo.data && (
				<ul>
					{todo.data.map(todo => (
						<li key={todo.id} onClick={() => dispatch(todoList())}>
							{todo.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
