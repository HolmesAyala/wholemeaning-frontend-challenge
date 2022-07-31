import { configureStore } from '@reduxjs/toolkit';

import { pokemonsReducer } from './reducers/pokemons';
import { combatPokemonReducer } from './reducers/combat-pokemon';

const store = configureStore({
	reducer: {
		pokemons: pokemonsReducer,
		combatPokemon: combatPokemonReducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;

export default store;
