import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export const Header = styled('header')(
	() => css`
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
		gap: 16px;
	`
);

export const BackLink = styled(Link)<LinkProps>(
	() => css`
		font-size: 1rem;
		color: black;
		text-decoration: none;
		padding: 16px;
		font-weight: bold;

		&:hover {
			background-color: ghostwhite;
		}
	`
);
