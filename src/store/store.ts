import { configureStore } from '@reduxjs/toolkit';

import { pokemonsReducer } from './reducers/pokemons';

const store = configureStore({
	reducer: {
		pokemons: pokemonsReducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;

export default store;
