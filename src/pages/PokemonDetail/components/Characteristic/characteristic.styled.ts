import styled, { css } from 'styled-components';

export const Characteristic = styled('li')(
	() => css`
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
	`
);

export const Label = styled('p')(
	() => css`
		margin: 0;
		font-size: 1.5rem;
		font-weight: bold;
	`
);

export const Value = styled('p')(
	() => css`
		margin: 0;
		font-size: 2rem;
	`
);
