import { useEffect, useState, ChangeEvent } from 'react';

import * as styled from './home.styled';

import PokemonItemComponent from '../../components/PokemonItem';

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

export const MAX_POKEMON_TO_LOAD = 151;

export const PATH = '/home';

function Home() {
	const dispatch = useDispatch();

	const pokemonsAlreadyLoaded = useSelector(selectItemsAlreadyLoaded);

	const pokemonItems = useSelector(selectPokemonItems);

	const { loadData: loadPokemonList, data: pokemonItemsLoaded } = useLoadPokemonList();

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

	const pokemonItemsToRender: JSX.Element[] = pokemonItemsBySearch.map((pokemonItem) => (
		<PokemonItemComponent
			key={pokemonItem.id}
			imageUrl={pokemonItem.imageUrl}
			name={pokemonItem.name}
		/>
	));

	return (
		<styled.Home>
			<styled.SearchField
				placeholder='Buscar pokemon por nombre o número'
				onChange={onChangeFromSearchField}
			/>

			<styled.PokemonList>{pokemonItemsToRender}</styled.PokemonList>
		</styled.Home>
	);
}

export default Home;
