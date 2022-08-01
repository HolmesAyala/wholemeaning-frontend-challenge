import { useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styled from './pokemon-detail.styled';

import Characteristic from './components/Characteristic';
import BaseStatistics from './components/BaseStatistics';

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

	const {
		loading: loadingPokemonDetail,
		error: errorLoadingPokemonDetail,
		data: pokemonDetail,
		loadData: loadPokemonDetail,
	} = useLoadPokemonDetail();

	useEffect(() => {
		if (pokemonId) {
			loadPokemonDetail(pokemonId);
		} else {
			navigate(HOME_PATH, { replace: true });
		}
	}, [loadPokemonDetail, pokemonId, navigate]);

	if (pokemonId === null) return null;

	const loadingMessage: JSX.Element = (
		<styled.Alert>Cargando la información del Pokémon...</styled.Alert>
	);

	const loadingErrorMessage: JSX.Element = (
		<styled.Alert severity='error'>Error al cargar la información del Pokémon</styled.Alert>
	);

	const pokemonInformation: JSX.Element | null = pokemonDetail ? (
		<styled.PokemonInformation>
			<styled.PokemonImage
				draggable='false'
				src={
					pokemonDetail.sprites.other.dream_world.front_default ??
					pokemonDetail.sprites.front_default ??
					undefined
				}
				alt={pokemonDetail.name}
			/>

			<styled.SectionTitle>Características</styled.SectionTitle>

			<styled.Characteristics>
				<Characteristic label='Número' value={pokemonDetail.id} />

				<Characteristic label='Altura' value={`${pokemonDetail.height / 10} m`} />

				<Characteristic label='Nombre' value={pokemonDetail.name} />

				<Characteristic
					label='Tipo(s)'
					value={pokemonDetail.types.map((typeItem) => typeItem.type.name).join(', ')}
				/>
			</styled.Characteristics>

			<styled.SectionTitle>Estadísticas base</styled.SectionTitle>

			<BaseStatistics
				statItems={pokemonDetail.stats.map((stat) => ({
					name: stat.stat.name,
					value: stat.base_stat,
				}))}
			/>
		</styled.PokemonInformation>
	) : null;

	return (
		<styled.PokemonDetail>
			<styled.Header pokemonId={pokemonId} />

			{!loadingPokemonDetail && !errorLoadingPokemonDetail && pokemonInformation}

			{loadingPokemonDetail && loadingMessage}

			{errorLoadingPokemonDetail && loadingErrorMessage}
		</styled.PokemonDetail>
	);
}

export default PokemonDetail;
