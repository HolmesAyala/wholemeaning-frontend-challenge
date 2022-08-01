import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

export const BaseStatistics = styled('ul')(
	() => css`
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	`
);

export const StatItem = styled('li')(
	() => css`
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
	`
);

export const StatName = styled('p')(
	() => css`
		margin: 0;
		font-size: 1.5rem;
		font-weight: 500;
		text-transform: capitalize;
	`
);

export type StatValueProps = ComponentProps<'div'> & {
	$valuePercentage: number;
};

export const StatValue = styled('div')<StatValueProps>(
	({ $valuePercentage }) => css`
		height: 16px;
		width: 100%;
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		background-color: #eeeeee;

		&::before {
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			width: ${$valuePercentage}%;
			height: 100%;
			background-color: orange;
		}
	`
);
