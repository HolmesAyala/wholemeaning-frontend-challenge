import { ReactNode } from 'react';

import * as styled from './characteristic.styled';

export type CharacteristicProps = {
	label: ReactNode;
	value: ReactNode;
};

function Characteristic({ label, value }: CharacteristicProps) {
	return (
		<styled.Characteristic>
			<styled.Label>{label}</styled.Label>

			<styled.Value>{value}</styled.Value>
		</styled.Characteristic>
	);
}

export default Characteristic;
