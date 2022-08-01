import { environmentVars } from '../../../environment-vars';

export type StatItem = {
	base_stat: number;
	stat: { name: string };
};

export type TypeItem = {
	type: {
		name: string;
	};
};

export type GetPokemonDetailData = {
	id: number;
	name: string;
	height: number;
	sprites: {
		front_default: string | null;
		other: {
			dream_world: {
				front_default: string | null;
			};
		};
	};
	types: TypeItem[];
	stats: StatItem[];
};

export async function getPokemonDetail(
	pokemonId: GetPokemonDetailData['id']
): Promise<GetPokemonDetailData> {
	const response = await fetch(`${environmentVars.api.baseUrl}/pokemon/${pokemonId}`);

	const body = await response.json();

	return body;
}
