import { ReactNode } from 'react';

import * as styled from './alert.styled';
import { AlertProps as AlertPropsStyled } from './alert.styled';

export type AlertProps = {
	className?: string;
	children?: ReactNode;
	severity?: AlertPropsStyled['$severity'];
};

function Alert({ className, severity = 'detault', children }: AlertProps) {
	return (
		<styled.Alert className={className} $severity={severity}>
			{children}
		</styled.Alert>
	);
}

export default Alert;
