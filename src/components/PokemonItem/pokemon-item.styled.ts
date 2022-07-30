import styled, { css } from 'styled-components';

export const PokemonItem = styled('li')(
	() => css`
		position: relative;
		list-style: none;
		display: flex;
		flex-direction: column;
	`
);

export const ItemActionContainer = styled('div')(
	() => css`
		position: absolute;
		top: 0;
		right: 0;
	`
);

export const PokemonActionArea = styled('button')(
	() => css`
		display: block;
		padding: 0;

		&:hover {
			cursor: pointer;
		}
	`
);

export const PokemonImageContainer = styled('div')(
	() => css`
		position: relative;
		width: 100%;
		padding-top: 100%;
	`
);

export const PokemonImage = styled('img')(
	() => css`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	`
);

export const PokemonName = styled('p')(
	() => css`
		font-size: 1rem;
		font-weight: bold;
		margin: 1rem 0 0 0;
	`
);
