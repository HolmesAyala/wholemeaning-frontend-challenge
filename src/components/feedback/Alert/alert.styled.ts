import styled, { css } from 'styled-components';

export type AlertProps = {
	$severity: 'detault' | 'error';
};

export const Alert = styled('p')<AlertProps>(
	({ $severity }) => css`
		font-size: 1rem;
		padding: 16px;
		text-align: center;
		border-radius: 8px;
		font-weight: bold;
		background-color: ghostwhite;

		${$severity === 'error' &&
		css`
			color: crimson;
			background-color: rgba(220, 20, 60, 0.1);
		`}
	`
);
