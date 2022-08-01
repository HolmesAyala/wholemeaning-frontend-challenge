import { ComponentPropsWithRef, forwardRef } from 'react';

import * as styled from './button.styled';

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'color'> & {
	color?: 'default' | 'success' | 'error';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ color = 'default', ...props }: ButtonProps, ref) => {
		return <styled.Button ref={ref} color={color} {...props} />;
	}
);

export default Button;
