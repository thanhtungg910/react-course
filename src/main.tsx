/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './app/store';
import './index.css';
import 'antd/dist/antd.css';
import GlobalStyles from './GlobalStyles';

const theme = {
	primary: '#D70018',
	hoverBg: 'hsla(0,0%,100%,.2)',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<BrowserRouter>
					<GlobalStyles />
					<App />
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</>
);
