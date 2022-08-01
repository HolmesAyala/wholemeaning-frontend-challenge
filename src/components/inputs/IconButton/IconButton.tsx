import { ComponentPropsWithRef, forwardRef } from 'react';

import * as styled from './icon-button.styled';

export type IconButtonProps = Omit<ComponentPropsWithRef<'button'>, 'color'> & {
	color?: 'default' | 'success' | 'error';
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ color = 'default', ...props }: IconButtonProps, ref) => {
		return <styled.IconButton ref={ref} color={color} {...props} />;
	}
);

export default IconButton;
