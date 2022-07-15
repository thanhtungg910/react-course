import { Route, Routes } from 'react-router-dom';
import DashBoard from './layouts/Dash-board';
import MainLayout from './layouts/MainLayout';
import { privateRoutes, publicRoutes } from './routes/routes';
import 'antd/dist/antd.css';
import { Suspense } from 'react';

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route element={<MainLayout />}>
					{publicRoutes.map((item, index) => {
						let Comp;
						if (item.component) {
							Comp = item.component;
						}
						return (
							<Route key={index} path={item.path} element={<Comp />}></Route>
						);
					})}
				</Route>
				<Route path='dash-board' element={<DashBoard />}>
					{privateRoutes.map((item, index) => {
						let Comp;
						if (item.component) {
							Comp = item.component;
						}
						return (
							<Route
								caseSensitive={true}
								key={index}
								path={item.path}
								element={<Comp />}
							></Route>
						);
					})}
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
