import { Outlet } from 'react-router-dom';
import Header from '../Header';

const MainLayout = () => {
	return (
		<>
			<Header></Header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
