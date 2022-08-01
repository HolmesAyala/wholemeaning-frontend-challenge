import styled, { css } from 'styled-components';

export type ButtonProps = {
	color: 'default' | 'success' | 'error';
};

export const Button = styled('button')<ButtonProps>(
	({ color: $themeColor }) => css`
		padding: 16px;
		border-radius: 8px;
		font-size: 1rem;
		border: none;

		&:hover {
			cursor: pointer;
			filter: brightness(0.9);
		}

		&:disabled {
			cursor: default;
			filter: none;
		}

		${$themeColor === 'success' &&
		css`
			background-color: yellowgreen;
			color: white;

			&:disabled {
				background-color: gray;
			}
		`}

		${$themeColor === 'error' &&
		css`
			background-color: crimson;
			color: white;

			&:disabled {
				background-color: gray;
			}
		`}
	`
);
