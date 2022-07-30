import { ReactNode } from 'react';

import * as styled from './pokemon-item.styled';

export type PokemonItemProps = {
	itemAction?: ReactNode;
	imageUrl?: string;
	name?: string;
	onClick?: () => void;
};

function PokemonItem({ itemAction, imageUrl, name, onClick }: PokemonItemProps) {
	const itemActionContainer: JSX.Element | null = itemAction ? (
		<styled.ItemActionContainer>{itemAction}</styled.ItemActionContainer>
	) : null;

	return (
		<styled.PokemonItem>
			<styled.PokemonActionArea onClick={onClick}>
				<styled.PokemonImageContainer>
					<styled.PokemonImage src={imageUrl} />
				</styled.PokemonImageContainer>

				<styled.PokemonName>{name}</styled.PokemonName>
			</styled.PokemonActionArea>

			{itemActionContainer}
		</styled.PokemonItem>
	);
}

export default PokemonItem;
