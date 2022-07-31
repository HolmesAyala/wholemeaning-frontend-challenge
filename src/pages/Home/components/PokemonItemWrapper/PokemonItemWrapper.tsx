import PokemonItemBase from '../../../../components/PokemonItem';

import { useSelector, useDispatch } from 'react-redux';
import { PokemonItem } from '../../../../store/reducers/pokemons';
import {
	addItem as addCombatPokemon,
	selectIsPokemonReadyForCombat,
	selectIsMaxPokemonItemsReached,
} from '../../../../store/reducers/combat-pokemon';

type PokemonItemWrapperProps = {
	pokemonItem: PokemonItem;
};

function PokemonItemWrapper({ pokemonItem }: PokemonItemWrapperProps) {
	const dispatch = useDispatch();

	const isPokemonReadyForCombat = useSelector(selectIsPokemonReadyForCombat(pokemonItem.id));

	const isMaxPokemonItemsReached = useSelector(selectIsMaxPokemonItemsReached);

	const onAddPokemonItemToBattleReady = (pokemonItem: PokemonItem) => {
		dispatch(addCombatPokemon(pokemonItem));
	};

	return (
		<PokemonItemBase
			itemAction={
				<button
					disabled={isPokemonReadyForCombat || isMaxPokemonItemsReached}
					onClick={() => onAddPokemonItemToBattleReady(pokemonItem)}
				>
					+
				</button>
			}
			imageUrl={pokemonItem.imageUrl}
			name={pokemonItem.name}
		/>
	);
}

export default PokemonItemWrapper;
