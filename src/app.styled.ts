import styled, { css } from 'styled-components';

export const App = styled('div')(
	() => css`
		display: grid;
		grid-template-columns: 1fr calc(256px + 158px);
		height: 100%;
		overflow: hidden;
	`
);
