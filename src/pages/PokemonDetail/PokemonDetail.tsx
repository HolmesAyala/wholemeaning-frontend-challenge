import { useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styled from './pokemon-detail.styled';

import Header from './components/Header';

import { useLoadPokemonDetail } from './hooks/use-load-pokemon-detail';

import { MAX_POKEMON_TO_LOAD, PATH as HOME_PATH } from '../Home';

export const PATH = '/pokemon-detail';

export enum QUERY_PARAMS {
	ID = 'id',
}

function PokemonDetail() {
	const navigate = useNavigate();

	const location = useLocation();

	const pokemonId: number | null = useMemo(() => {
		const pokemonIdFromQuery: string | null = new URLSearchParams(location.search).get(
			QUERY_PARAMS.ID
		);

		const pokemonIdParsed: number = Number(pokemonIdFromQuery);

		if (isNaN(pokemonIdParsed)) return null;

		if (pokemonIdParsed < 1 || pokemonIdParsed > MAX_POKEMON_TO_LOAD) return null;

		return pokemonIdParsed;
	}, [location.search]);

	const { data: pokemonDetail, loadData: loadPokemonDetail } = useLoadPokemonDetail();

	useEffect(() => {
		if (pokemonId) {
			loadPokemonDetail(pokemonId);
		} else {
			navigate(HOME_PATH, { replace: true });
		}
	}, [loadPokemonDetail, pokemonId, navigate]);

	if (pokemonId === null) return null;

	const pokemonInformation: JSX.Element | null = pokemonDetail ? <></> : null;

	return (
		<styled.PokemonDetail>
			<Header pokemonId={pokemonId} />

			{pokemonInformation}
		</styled.PokemonDetail>
	);
}

export default PokemonDetail;
