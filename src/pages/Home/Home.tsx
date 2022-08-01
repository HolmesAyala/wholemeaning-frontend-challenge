import { useEffect, useState, ChangeEvent, useMemo } from 'react';

import * as styled from './home.styled';

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

	const [search, setSearch] = useState('');

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

		setSearch(search);

		setPokemonItemsBySearch(
			pokemonItems.filter((pokemonItem) => pokemonItemMatchSearch(pokemonItem, search))
		);
	};

	const loadingMessage: JSX.Element = <styled.Alert>Cargardo lista de Pokémon...</styled.Alert>;

	const errorMessage: JSX.Element = (
		<styled.Alert severity='error'>Error al cargar las lista de Pokémon.</styled.Alert>
	);

	const emptySearchMessage: JSX.Element = (
		<styled.Alert>Ningún Pokémon coincide con el criterio de búsqueda.</styled.Alert>
	);

	const pokemonItemsToRender: JSX.Element[] = useMemo(
		() =>
			pokemonItemsBySearch.map((pokemonItem) => (
				<PokemonItemWrapper key={pokemonItem.id} pokemonItem={pokemonItem} />
			)),
		[pokemonItemsBySearch]
	);

	const pokemonListToRender: JSX.Element | null =
		pokemonItemsToRender.length > 0 ? (
			<styled.PokemonList>{pokemonItemsToRender}</styled.PokemonList>
		) : null;

	return (
		<styled.Home>
			<styled.Logo src={pokedexLogo} alt='Pokédex' />

			<styled.SearchField
				value={search}
				placeholder='Buscar pokémon por nombre o número'
				onChange={onChangeFromSearchField}
			/>

			{!loadingPokemonList && !errorLoadingPokemonList && pokemonListToRender}

			{loadingPokemonList && loadingMessage}

			{errorLoadingPokemonList && errorMessage}

			{search.trim() && pokemonItemsToRender.length === 0 && emptySearchMessage}
		</styled.Home>
	);
}

export default Home;
