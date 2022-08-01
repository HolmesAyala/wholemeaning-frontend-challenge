import * as styled from './base-statistics.styled';

export const MAX_BASE_VALUE = 255;

export type StatItem = {
	name: string;
	value: number;
};

export type BaseStatisticsProps = {
	statItems: StatItem[];
};

function BaseStatistics({ statItems: items }: BaseStatisticsProps) {
	const statItemsToRender: JSX.Element[] = items.map((item) => {
		return (
			<styled.StatItem key={item.name} aria-label='Estadística base'>
				<styled.StatName>{item.name}</styled.StatName>

				<styled.StatValue
					title={String(item.value)}
					$valuePercentage={(item.value / MAX_BASE_VALUE) * 100}
				/>
			</styled.StatItem>
		);
	});

	return (
		<styled.BaseStatistics aria-label='Lista de estadísticas base'>
			{statItemsToRender}
		</styled.BaseStatistics>
	);
}

export default BaseStatistics;
