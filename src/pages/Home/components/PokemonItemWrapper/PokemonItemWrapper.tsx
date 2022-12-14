import { useNavigate } from 'react-router-dom';

import * as styled from './pokemon-item-wrapper.styled';

import PokemonItemBase from '../../../../app-components/PokemonItem';

import { useSelector, useDispatch } from 'react-redux';
import { PokemonItem } from '../../../../store/reducers/pokemons';
import {
	addItem as addCombatPokemon,
	selectIsPokemonReadyForCombat,
	selectIsMaxPokemonItemsReached,
} from '../../../../store/reducers/combat-pokemon';

import {
	PATH as POKEMON_DETAIL_PATH,
	QUERY_PARAMS as POKEMON_DETAIL_QUERY_PARAMS,
} from '../../../PokemonDetail';

type PokemonItemWrapperProps = {
	pokemonItem: PokemonItem;
};

function PokemonItemWrapper({ pokemonItem }: PokemonItemWrapperProps) {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const isPokemonReadyForCombat = useSelector(selectIsPokemonReadyForCombat(pokemonItem.id));

	const isMaxPokemonItemsReached = useSelector(selectIsMaxPokemonItemsReached);

	const onAddPokemonItemToBattleReady = (pokemonItem: PokemonItem) => {
		dispatch(addCombatPokemon(pokemonItem));
	};

	const onClickFromPokemonItem = () => {
		navigate(`${POKEMON_DETAIL_PATH}?${POKEMON_DETAIL_QUERY_PARAMS.ID}=${pokemonItem.id}`);
	};

	return (
		<PokemonItemBase
			itemAction={
				<styled.AddButton
					color='success'
					disabled={isPokemonReadyForCombat || isMaxPokemonItemsReached}
					onClick={() => onAddPokemonItemToBattleReady(pokemonItem)}
				>
					+
				</styled.AddButton>
			}
			imageUrl={pokemonItem.imageUrl}
			id={pokemonItem.id}
			name={pokemonItem.name}
			onClick={onClickFromPokemonItem}
		/>
	);
}

export default PokemonItemWrapper;
