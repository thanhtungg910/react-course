import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import { publicRoutes } from './routes';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {publicRoutes.length > 0 &&
                    publicRoutes.map((item, index) => {
                        let Comp: JSX.Element | any;
                        if (!item.component) return;
                        Comp = item.component;
                        return <Route key={index} path={item.path} element={<Comp />}></Route>;
                    })}
            </Route>
        </Routes>
    );
}

export default App;
