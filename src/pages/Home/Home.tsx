import { useEffect, useState, ChangeEvent } from 'react';

import * as styled from './home.styled';

import Alert from '../../components/feedback/Alert';
import PokemonItemWrapper from './components/PokemonItemWrapper';

import { useSelector, useDispatch } from 'react-redux';
import {
	PokemonItem,
	selectItemsAlreadyLoaded,
	selectPokemonItems,
	setPokemonsState,
} from '../../store/reducers/pokemons';

import { useLoadPokemonList } from './hooks/use-load-pokemon-list';

import { pokemonResultToPokemonItem } from './utils/pokemon-result-to-pokemon-item';
import { pokemonItemMatchSearch } from './utils/pokemon-item-match-search';

import pokedexLogo from './assets/pokedex-logo.png';

export const MAX_POKEMON_TO_LOAD = 151;

export const PATH = '/home';

function Home() {
	const dispatch = useDispatch();

	const pokemonsAlreadyLoaded = useSelector(selectItemsAlreadyLoaded);

	const pokemonItems = useSelector(selectPokemonItems);

	const {
		loading: loadingPokemonList,
		error: errorLoadingPokemonList,
		loadData: loadPokemonList,
		data: pokemonItemsLoaded,
	} = useLoadPokemonList();

	const [pokemonItemsBySearch, setPokemonItemsBySearch] = useState<PokemonItem[]>([]);

	useEffect(() => {
		if (!pokemonsAlreadyLoaded) {
			loadPokemonList({ query: { limit: MAX_POKEMON_TO_LOAD } });
		}
	}, [loadPokemonList, pokemonsAlreadyLoaded]);

	useEffect(() => {
		if (pokemonItemsLoaded) {
			dispatch(
				setPokemonsState({
					itemsAlreadyLoaded: true,
					items: pokemonItemsLoaded.results.map(pokemonResultToPokemonItem),
				})
			);
		}
	}, [dispatch, pokemonItemsLoaded]);

	useEffect(() => {
		setPokemonItemsBySearch(pokemonItems);
	}, [pokemonItems]);

	const onChangeFromSearchField = (event: ChangeEvent<HTMLInputElement>) => {
		const { value: search } = event.target;

		setPokemonItemsBySearch(
			pokemonItems.filter((pokemonItem) => pokemonItemMatchSearch(pokemonItem, search))
		);
	};

	const loadingMessage: JSX.Element = <styled.Alert>Cargardo lista de Pokémon...</styled.Alert>;

	const errorMessage: JSX.Element = (
		<styled.Alert severity='error'>Error al cargar las lista de Pokémon.</styled.Alert>
	);

	const pokemonItemsToRender: JSX.Element[] = pokemonItemsBySearch.map((pokemonItem) => (
		<PokemonItemWrapper key={pokemonItem.id} pokemonItem={pokemonItem} />
	));

	return (
		<styled.Home>
			<styled.Logo src={pokedexLogo} alt='Pokédex' />

			<styled.SearchField
				placeholder='Buscar pokémon por nombre o número'
				onChange={onChangeFromSearchField}
			/>

			{!loadingPokemonList && !errorLoadingPokemonList && (
				<styled.PokemonList>{pokemonItemsToRender}</styled.PokemonList>
			)}

			{loadingPokemonList && loadingMessage}

			{errorLoadingPokemonList && errorMessage}
		</styled.Home>
	);
}

export default Home;
