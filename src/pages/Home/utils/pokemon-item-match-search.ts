import { PokemonItem } from '../../../store/reducers/pokemons';

export function pokemonItemMatchSearch(pokemonItem: PokemonItem, search: string): boolean {
	const searchNormalized = search.trim().toLowerCase();

	return (
		String(pokemonItem.id).includes(searchNormalized) ||
		pokemonItem.name.toLowerCase().includes(searchNormalized)
	);
}
