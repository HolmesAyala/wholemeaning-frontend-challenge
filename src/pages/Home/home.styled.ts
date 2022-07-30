import styled, { css } from 'styled-components';

export const Home = styled('main')(
	() => css`
		padding: 16px;
		display: flex;
		flex-direction: column;
	`
);

export const SearchField = styled('input')(
	() => css`
		display: block;
		font-size: 1.5rem;
		padding: 8px;
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
