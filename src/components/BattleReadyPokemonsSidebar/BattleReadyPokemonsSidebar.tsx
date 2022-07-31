import { MouseEvent } from 'react';

import * as styled from './battle-ready-pokemons-sidebar.styled';

import PokemonItemComponent from '../PokemonItem';

import { useSelector, useDispatch } from 'react-redux';
import {
	selectCombatPokemonItems,
	removeItem as removePokemonItem,
} from '../../store/reducers/combat-pokemon';

function BattleReadyPokemonsSidebar() {
	const dispatch = useDispatch();

	const combatPokemonItems = useSelector(selectCombatPokemonItems);

	const onClickFromRemoveButtonInPokemonItem = (event: MouseEvent<HTMLButtonElement>) => {
		const { itemId } = event.currentTarget.dataset;

		if (itemId) {
			dispatch(removePokemonItem({ id: Number(itemId) }));
		}
	};

	const pokemonItemsToRender: JSX.Element[] = combatPokemonItems.map((combatPokemonItem) => (
		<PokemonItemComponent
			key={combatPokemonItem.id}
			itemAction={
				<button data-item-id={combatPokemonItem.id} onClick={onClickFromRemoveButtonInPokemonItem}>
					x
				</button>
			}
			imageUrl={combatPokemonItem.imageUrl}
			name={combatPokemonItem.name}
		/>
	));

	const pokemonListToRender: JSX.Element | null =
		pokemonItemsToRender.length > 0 ? (
			<styled.PokemonList>{pokemonItemsToRender}</styled.PokemonList>
		) : null;

	const emptyListMessage: JSX.Element | null =
		pokemonItemsToRender.length === 0 ? (
			<styled.EmptyListMessage>No hay ningún pokémon listo.</styled.EmptyListMessage>
		) : null;

	return (
		<styled.BattleReadyPokemonsSidebar>
			<styled.Title>Listos para el combate</styled.Title>

			{pokemonListToRender}

			{emptyListMessage}
		</styled.BattleReadyPokemonsSidebar>
	);
}

export default BattleReadyPokemonsSidebar;
