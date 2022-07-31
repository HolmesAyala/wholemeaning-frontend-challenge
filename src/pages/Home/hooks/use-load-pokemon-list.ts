import { useState, useCallback } from 'react';

import {
	getPokemonList,
	GetPokemonListProps,
	GetPokemonListData,
} from '../../../api/pokemon/get-pokemon-list';

export type UseLoadPokemonListReturn = {
	loadData: (props?: GetPokemonListProps) => Promise<GetPokemonListData | undefined>;
	loading: boolean;
	data: GetPokemonListData | null;
	error: Error | null;
};

export function useLoadPokemonList(): UseLoadPokemonListReturn {
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState<GetPokemonListData | null>(null);

	const [error, setError] = useState<Error | null>(null);

	const loadData = useCallback(
		async (props?: GetPokemonListProps): Promise<GetPokemonListData | undefined> => {
			try {
				setLoading(true);

				const pokemonListResult = await getPokemonList(props);

				setData(pokemonListResult);

				return pokemonListResult;
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error('Error loading pokemon items'));
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
