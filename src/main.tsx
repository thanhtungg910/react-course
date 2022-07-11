/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './GlobalStyles';
import 'antd/dist/antd.css';
import './index.css';

const theme = {
	primary: '#D70018',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyles />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
