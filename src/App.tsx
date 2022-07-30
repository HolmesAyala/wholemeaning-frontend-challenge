import { Route, Routes, Navigate } from 'react-router-dom';

import Home, { PATH as HOME_PATH } from './pages/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path={HOME_PATH} element={<Home />} />

				<Route path='*' element={<Navigate to={HOME_PATH} replace />} />
			</Routes>
		</>
	);
}

export default App;
