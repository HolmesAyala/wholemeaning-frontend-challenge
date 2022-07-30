export function getPokemonId(pokemonUrl: string): number {
	const urlObject = new URL(pokemonUrl);

	const pathSplitBySlash = urlObject.pathname.split('/');

	const pokemonId = Number(pathSplitBySlash.at(-1));

	return pokemonId;
}
