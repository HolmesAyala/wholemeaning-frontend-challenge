import styled, { css } from 'styled-components';

export const App = styled('div')(
	() => css`
		display: grid;
		grid-template-columns: minmax(0, 1fr) calc(256px + 128px);
		height: 100%;
		overflow: hidden;
	`
);
