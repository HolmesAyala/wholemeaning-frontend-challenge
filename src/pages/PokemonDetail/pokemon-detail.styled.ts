import styled, { css } from 'styled-components';
import HeaderBase from './components/Header';

export const PokemonDetail = styled('main')(
	() => css`
		overflow-y: auto;
	`
);

export const Header = styled(HeaderBase)(
	() => css`
		position: sticky;
		top: 0;
		background-color: white;
		padding: 32px;
	`
);

export const PokemonInformation = styled('div')(
	() => css`
		max-width: 512px;
		margin: auto;
		margin-top: 32px;
		padding-bottom: 32px;
	`
);

export const PokemonImage = styled('img')(
	() => css`
		display: block;
		width: calc(256px + 128px);
		height: calc(256px + 128px);
		object-fit: contain;
		margin: auto;
		user-select: none;
	`
);

export const SectionTitle = styled('h3')(
	() => css`
		font-size: 2rem;
		font-weight: bold;
		margin: 32px 0;
	`
);

export const Characteristics = styled('ul')(
	() => css`
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	`
);
