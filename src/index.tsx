import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ReduxProvider store={reduxStore}>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>
);
