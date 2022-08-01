import { ComponentPropsWithRef, forwardRef } from 'react';

import * as styled from './button.styled';
import { ButtonProps as ButtonPropsStyled } from './button.styled';

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'color'> & {
	color?: ButtonPropsStyled['$color'];
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ color = 'default', ...props }: ButtonProps, ref) => {
		return <styled.Button ref={ref} $color={color} {...props} />;
	}
);

export default Button;
