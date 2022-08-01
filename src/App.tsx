import { lazy, Suspense } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { GlobalStyles } from './styles/global';
import * as styled from './app.styled';

import BattleReadyPokemonsSidebar from './app-components/BattleReadyPokemonsSidebar';

import { PATH as HOME_PATH } from './pages/Home';
import { PATH as POKEMON_DETAIL_PATH } from './pages/PokemonDetail';

const Home = lazy(() => import('./pages/Home'));
const PokemonDetail = lazy(() => import('./pages/PokemonDetail'));

function App() {
	return (
		<>
			<GlobalStyles />

			<styled.App>
				<Suspense fallback={<>Loading page...</>}>
					<Routes>
						<Route path={HOME_PATH} element={<Home />} />

						<Route path={POKEMON_DETAIL_PATH} element={<PokemonDetail />} />

						<Route path='*' element={<Navigate to={HOME_PATH} replace />} />
					</Routes>
				</Suspense>

				<BattleReadyPokemonsSidebar />
			</styled.App>
		</>
	);
}

export default App;
