import styled, { css } from 'styled-components';

export const Home = styled('main')(
	() => css`
		display: flex;
		flex-direction: column;
		overflow: auto;
		padding: 16px;
	`
);

export const SearchField = styled('input')(
	() => css`
		display: block;
		font-size: 1.5rem;
		padding: 8px;
		position: sticky;
		top: 0;
		z-index: 1;
	`
);

export const PokemonList = styled('ul')(
	() => css`
		margin: 16px 0 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
		gap: 16px;
	`
);
