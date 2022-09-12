import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import userSelector from './features/user/userSelector';
import { privateRoutes, publicRoutes } from './routes/routes';
const DashBoardLazy = lazy(() => import('./layouts/Dash-board'));
const MainLayoutLazy = lazy(() => import('./layouts/MainLayout'));

const SignInPage = lazy(() => import('~/features/user/sign-in/SignInPage'));
const SignUpPage = lazy(() => import('~/features/user/sign-up/SignUpPage'));
function App() {
	const user = useAppSelector((state) => userSelector(state));
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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
						element={
							user?.user?.id !== 1 ? <Navigate to='/' /> : <DashBoardLazy />
						}
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
									element={
										user?.user?.id !== 1 ? <Navigate to='/' /> : <Comp />
									}
								></Route>
							);
						})}
					</Route>
					<Route
						path='/sign-up'
						element={user?.isLogin ? <Navigate to='/' /> : <SignUpPage />}
					></Route>
					<Route
						path='/sign-in'
						element={user?.isLogin ? <Navigate to='/' /> : <SignInPage />}
					></Route>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
