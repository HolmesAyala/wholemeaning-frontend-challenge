import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';
import { PokemonItem } from './pokemons';

export const DEFAULT_MAX_COMBAT_POKEMON = 6;

export type CombatPokemonItem = PokemonItem;

export type CombatPokemonStore = {
	maxItems: number;
	items: CombatPokemonItem[];
};

const INITIAL_STATE: CombatPokemonStore = {
	maxItems: DEFAULT_MAX_COMBAT_POKEMON,
	items: [],
};

export const combatPokemonSlice = createSlice({
	name: 'combatPokemons',
	initialState: INITIAL_STATE,
	reducers: {
		setCombatPokemonState(state: CombatPokemonStore, action: PayloadAction<CombatPokemonStore>) {
			state.items = action.payload.items;
		},
		addItem(state: CombatPokemonStore, action: PayloadAction<CombatPokemonItem>) {
			if (state.items.length < state.maxItems) {
				state.items.push(action.payload);
			}
		},
		removeItem(state: CombatPokemonStore, action: PayloadAction<Pick<CombatPokemonItem, 'id'>>) {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const combatPokemonReducer = combatPokemonSlice.reducer;

export const selectCombatPokemonItems = (state: StoreState) => state.combatPokemon.items;

export const { setCombatPokemonState, addItem, removeItem } = combatPokemonSlice.actions;
