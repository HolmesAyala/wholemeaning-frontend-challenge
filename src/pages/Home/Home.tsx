import { useEffect, useState } from 'react';

import * as styled from './home.styled';

import PokemonItemComponent from '../../components/PokemonItem';

import { getPokemonList } from '../../api/pokemon/get-pokemon-list';

import { getPokemonId } from './utils/get-pokemon-id';
import { getPokemonSpriteUrl } from './utils/get-pokemon-sprite-url';

type PokemonItem = {
	id: number;
	imageUrl: string;
	name: string;
};

export const MAX_POKEMON_TO_LOAD = 151;

export const PATH = '/home';

function Home() {
	const [pokemonItems, setPokemonItems] = useState<PokemonItem[]>([]);

	useEffect(() => {
		const loadPokemonList = async () => {
			try {
				const pokemonListResult = await getPokemonList({ query: { limit: MAX_POKEMON_TO_LOAD } });

				setPokemonItems(
					pokemonListResult.results.map((pokemonResult) => {
						const pokemonId = getPokemonId(
							pokemonResult.url.slice(0, pokemonResult.url.length - 1)
						);

						return {
							id: pokemonId,
							imageUrl: getPokemonSpriteUrl(pokemonId),
							name: pokemonResult.name,
						};
					})
				);
			} catch (error) {
				console.error(error);
			}
		};

		loadPokemonList();
	}, []);

	const pokemonItemsToRender: JSX.Element[] = pokemonItems.map((pokemonItem) => (
		<PokemonItemComponent
			key={pokemonItem.id}
			imageUrl={pokemonItem.imageUrl}
			name={pokemonItem.name}
		/>
	));

	return (
		<styled.Home>
			<styled.SearchField placeholder='Buscar pokemon por nombre o número' />

			<styled.PokemonList>{pokemonItemsToRender}</styled.PokemonList>
		</styled.Home>
	);
}

export default Home;
