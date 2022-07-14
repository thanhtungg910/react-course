import { Route, Routes } from 'react-router-dom';
import DashBoard from './layouts/Dash-board';
import MainLayout from './layouts/MainLayout';
import { privateRoutes, publicRoutes } from './routes/routes';

function App() {
	return (
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
						<Route key={index} path={item.path} element={<Comp />}></Route>
					);
				})}
			</Route>
		</Routes>
	);
}

export default App;
