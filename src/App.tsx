import { Route, Routes, Navigate } from 'react-router-dom';

import { GlobalStyles } from './styles/global';
import * as styled from './app.styled';

import BattleReadyPokemonsSidebar from './components/BattleReadyPokemonsSidebar';

import Home, { PATH as HOME_PATH } from './pages/Home';

function App() {
	return (
		<>
			<GlobalStyles />

			<styled.App>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />

					<Route path='*' element={<Navigate to={HOME_PATH} replace />} />
				</Routes>

				<BattleReadyPokemonsSidebar />
			</styled.App>
		</>
	);
}

export default App;
