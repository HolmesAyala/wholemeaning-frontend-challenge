import { ReactNode } from 'react';

import * as styled from './pokemon-item.styled';

export type PokemonItemProps = {
	itemAction?: ReactNode;
	imageUrl?: string;
	id?: number;
	name?: string;
	onClick?: () => void;
};

function PokemonItem({ itemAction, imageUrl, id, name, onClick }: PokemonItemProps) {
	const itemActionContainer: JSX.Element | null = itemAction ? (
		<styled.ItemActionContainer>{itemAction}</styled.ItemActionContainer>
	) : null;

	const pokemonId: JSX.Element | null = id !== undefined ? <span>({id})</span> : null;

	return (
		<styled.PokemonItem>
			<styled.PokemonActionArea onClick={onClick}>
				<styled.PokemonImageContainer>
					<styled.PokemonImage draggable='false' src={imageUrl} loading='lazy' alt={name} />
				</styled.PokemonImageContainer>

				<styled.PokemonName>
					{pokemonId} {name}
				</styled.PokemonName>
			</styled.PokemonActionArea>

			{itemActionContainer}
		</styled.PokemonItem>
	);
}

export default PokemonItem;
