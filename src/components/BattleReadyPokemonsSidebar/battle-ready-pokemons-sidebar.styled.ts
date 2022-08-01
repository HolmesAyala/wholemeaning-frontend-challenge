import styled, { css } from 'styled-components';
import IconButton from '../../components/inputs/IconButton';

export const BattleReadyPokemonsSidebar = styled('aside')(
	() => css`
		overflow: auto;
		padding: 32px;
		display: flex;
		flex-direction: column;
		background-color: aliceblue;
	`
);

export const Title = styled('h2')(
	() => css`
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		font-family: Arial, Helvetica, sans-serif;
	`
);

export const PokemonList = styled('ul')(
	() => css`
		padding: 0;
		margin: 1rem 0 0 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
		gap: 16px;
	`
);

export const RemoveButton = styled(IconButton)(
	() => css`
		margin-right: 8px;
		margin-top: 8px;
	`
);

export const EmptyListMessage = styled('p')(
	() => css`
		font-size: 1rem;
		flex-grow: 1;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	`
);
