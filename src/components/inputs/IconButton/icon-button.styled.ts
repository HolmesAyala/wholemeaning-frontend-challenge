import styled, { css } from 'styled-components';

export type IconButtonProps = {
	$color: 'default' | 'success' | 'error';
};

export const IconButton = styled('button')<IconButtonProps>(
	({ $color }) => css`
		width: 32px;
		height: 32px;
		border-radius: 50%;
		font-size: 2rem;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		overflow: hidden;

		&:hover {
			cursor: pointer;
			filter: brightness(0.9);
		}

		&:disabled {
			cursor: default;
			filter: none;
		}

		${$color === 'success' &&
		css`
			background-color: yellowgreen;
			color: white;

			&:disabled {
				background-color: gray;
			}
		`}

		${$color === 'error' &&
		css`
			background-color: crimson;
			color: white;

			&:disabled {
				background-color: gray;
			}
		`}
	`
);
