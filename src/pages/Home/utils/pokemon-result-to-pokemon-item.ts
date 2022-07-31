import { PokemonResult } from '../../../api/pokemon/get-pokemon-list';
import { PokemonItem } from '../../../store/reducers/pokemons';

import { getPokemonId } from '../utils/get-pokemon-id';
import { getPokemonSpriteUrl } from '../utils/get-pokemon-sprite-url';

export function pokemonResultToPokemonItem(pokemonResult: PokemonResult): PokemonItem {
	const pokemonId = getPokemonId(pokemonResult.url.slice(0, pokemonResult.url.length - 1));

	return {
		id: pokemonId,
		imageUrl: getPokemonSpriteUrl(pokemonId),
		name: pokemonResult.name,
	};
}
