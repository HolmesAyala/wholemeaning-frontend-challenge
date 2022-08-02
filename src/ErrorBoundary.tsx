import { Component, ReactNode, ErrorInfo } from 'react';
import styled, { css } from 'styled-components';

const ErrorMessage = styled('div')(
	() => css`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`
);

type ErrorBoundaryProps = {
	children?: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = {
		hasError: false,
	};

	constructor(props: {}) {
		super(props);

		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error?: Error) {
		return { hasError: Boolean(error) };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return <ErrorMessage>¡Ups!, Error desconocido.</ErrorMessage>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
