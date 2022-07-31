import * as styled from './header.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
	addItem as addPokemonToCombatList,
	removeItem as removePokemonFromCombatList,
	selectIsPokemonReadyForCombat,
	selectIsMaxPokemonItemsReached,
} from '../../../../store/reducers/combat-pokemon';
import { selectPokemonItems } from '../../../../store/reducers/pokemons';

import { PATH as HOME_PATH } from '../../../Home';

type HeaderProps = {
	pokemonId: number;
};

function Header({ pokemonId }: HeaderProps) {
	const dispatch = useDispatch();

	const pokemonItems = useSelector(selectPokemonItems);

	const isPokemonReadyForCombat = useSelector(selectIsPokemonReadyForCombat(Number(pokemonId)));

	const isMaxPokemonItemsReached = useSelector(selectIsMaxPokemonItemsReached);

	const onClickFromAddToCombatListButton = () => {
		const pokemonToAdd = pokemonItems.find((pokemonItem) => pokemonItem.id === pokemonId);

		if (pokemonToAdd) {
			dispatch(addPokemonToCombatList(pokemonToAdd));
		}
	};

	const onClickFromButtonToRemovePokemonInCombatList = () => {
		dispatch(removePokemonFromCombatList({ id: pokemonId }));
	};

	const removeFromCombatListButton: JSX.Element = (
		<button onClick={onClickFromButtonToRemovePokemonInCombatList}>
			Remover de la lista de combate
		</button>
	);

	const addToCombatListButton: JSX.Element = (
		<button disabled={isMaxPokemonItemsReached} onClick={onClickFromAddToCombatListButton}>
			Agregar a la lista de combate
		</button>
	);

	return (
		<styled.Header>
			<styled.BackLink to={HOME_PATH}>{`<- Lista de pokémon`}</styled.BackLink>

			{isPokemonReadyForCombat ? removeFromCombatListButton : addToCombatListButton}
		</styled.Header>
	);
}

export default Header;
