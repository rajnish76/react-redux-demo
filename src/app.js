import React from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyHome = React.lazy(() => import('./pages/home'));
const LazyDashboard = React.lazy(() => import('./pages/dashboard'));

function App() {
	return (
		<React.Suspense fallback='loading..'>
			<Routes>
				<Route path='/' element={<LazyHome />} />
				<Route path='/dashboard' element={<LazyDashboard />} />
			</Routes>
		</React.Suspense>
	);
}

export default App;
