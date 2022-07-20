import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import userSelector from './features/user/userSelector';
import { privateRoutes, publicRoutes } from './routes/routes';
const DashBoardLazy = lazy(() => import('./layouts/Dash-board'));
const MainLayoutLazy = lazy(() => import('./layouts/MainLayout'));

function App() {
	const { user } = useAppSelector((state) => userSelector(state));

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<MainLayoutLazy />}>
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
					<Route
						path='dash-board'
						element={user?.id !== 1 ? <Navigate to='/' /> : <DashBoardLazy />}
					>
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
									element={user?.id !== 1 ? <Navigate to='/' /> : <Comp />}
								></Route>
							);
						})}
					</Route>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
