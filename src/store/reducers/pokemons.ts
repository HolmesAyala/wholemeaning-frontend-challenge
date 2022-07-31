import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';

export type PokemonItem = {
	id: number;
	imageUrl: string;
	name: string;
};

export type PokemonsStore = {
	itemsAlreadyLoaded: boolean;
	items: PokemonItem[];
};

const INITIAL_STATE: PokemonsStore = { itemsAlreadyLoaded: false, items: [] };

export const pokemonSlice = createSlice({
	name: 'pokemons',
	initialState: INITIAL_STATE,
	reducers: {
		setPokemonsState(state: PokemonsStore, action: PayloadAction<PokemonsStore>) {
			state.itemsAlreadyLoaded = action.payload.itemsAlreadyLoaded;
			state.items = action.payload.items;
		},
	},
});

export const pokemonsReducer = pokemonSlice.reducer;

export const selectItemsAlreadyLoaded = (state: StoreState) => state.pokemons.itemsAlreadyLoaded;

export const selectPokemonItems = (state: StoreState) => state.pokemons.items;

export const { setPokemonsState } = pokemonSlice.actions;
