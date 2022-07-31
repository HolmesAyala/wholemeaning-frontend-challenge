import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export const Header = styled('header')(
	() => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`
);

export const BackLink = styled(Link)<LinkProps>(
	() => css`
		font-size: 1rem;
	`
);
