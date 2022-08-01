import styled, { css } from 'styled-components';

export const Home = styled('main')(
	() => css`
		display: flex;
		flex-direction: column;
		overflow: auto;
		padding: 16px;
	`
);

export const Logo = styled('img')(
	() => css`
		max-width: calc(128px + 64px);
		margin: 0 auto 32px auto;
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
		align-self: stretch;
		width: 512px;
		margin: 0 auto;
	`
);

export const PokemonList = styled('ul')(
	() => css`
		margin: 64px 0 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(128px), 1fr));
		gap: 32px;
	`
);
