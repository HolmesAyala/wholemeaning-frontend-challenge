import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styled from './battle-ready-pokemons-sidebar.styled';

import PokemonItemComponent from '../PokemonItem';

import { useSelector, useDispatch } from 'react-redux';
import {
	CombatPokemonItem,
	selectCombatPokemonItems,
	removeItem as removePokemonItem,
} from '../../store/reducers/combat-pokemon';

import {
	PATH as POKEMON_DETAIL_PATH,
	QUERY_PARAMS as POKEMON_DETAIL_QUERY_PARAMS,
} from '../../pages/PokemonDetail';

function BattleReadyPokemonsSidebar() {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const combatPokemonItems = useSelector(selectCombatPokemonItems);

	const onClickFromRemoveButtonInPokemonItem = (event: MouseEvent<HTMLButtonElement>) => {
		const { itemId } = event.currentTarget.dataset;

		if (itemId) {
			dispatch(removePokemonItem({ id: Number(itemId) }));
		}
	};

	const onClickFromPokemonItem = (combatPokemonItem: CombatPokemonItem) => {
		navigate(`${POKEMON_DETAIL_PATH}?${POKEMON_DETAIL_QUERY_PARAMS.ID}=${combatPokemonItem.id}`);
	};

	const pokemonItemsToRender: JSX.Element[] = combatPokemonItems.map((combatPokemonItem) => (
		<PokemonItemComponent
			key={combatPokemonItem.id}
			itemAction={
				<styled.RemoveButton
					color='error'
					data-item-id={combatPokemonItem.id}
					onClick={onClickFromRemoveButtonInPokemonItem}
				>
					×
				</styled.RemoveButton>
			}
			imageUrl={combatPokemonItem.imageUrl}
			name={combatPokemonItem.name}
			onClick={() => onClickFromPokemonItem(combatPokemonItem)}
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
