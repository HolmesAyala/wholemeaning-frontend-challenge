import { useState, useCallback } from 'react';

import { getPokemonDetail, GetPokemonDetailData } from '../../../api/pokemon/get-pokemon-detail';

type UseLoadPokemonDetailReturn = {
	loadData: (pokemonId: GetPokemonDetailData['id']) => Promise<GetPokemonDetailData | undefined>;
	data: GetPokemonDetailData | null;
	loading: boolean;
	error: Error | null;
};

export function useLoadPokemonDetail(): UseLoadPokemonDetailReturn {
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState<GetPokemonDetailData | null>(null);

	const [error, setError] = useState<Error | null>(null);

	const loadData = useCallback(
		async (pokemonId: GetPokemonDetailData['id']): Promise<GetPokemonDetailData | undefined> => {
			try {
				setLoading(true);

				const pokemonDetailData = await getPokemonDetail(pokemonId);

				setData(pokemonDetailData);

				return pokemonDetailData;
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error('Error loading pokemon detail'));
				}
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	return {
		loadData,
		loading,
		data,
		error,
	};
}
