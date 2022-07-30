import { environmentVars } from '../../../environment-vars';

export function getPokemonSpriteUrl(pokemonId: number): string {
	return `${environmentVars.assetsBaseUrl}/${pokemonId}.svg`;
}
