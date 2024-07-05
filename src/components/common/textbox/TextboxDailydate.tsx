import styled from '@emotion/styled';

import getNameOfDay from '@/utils/getNameOfDay';

type Props = {
	day: 'weekday' | 'weekend';
	type: 'long' | 'short';
};

const TextboxDailydate = ({ day, type }: Props) => {
	const today = new Date();
	const date = today.getDate();
	const dayOfTheWeek = today.getDay();

	return (
		<DailydateLayout type={type}>
			<DailydateContainer>
				<DateText>{date}일</DateText>
				{/* CAPTION_02 추가 후 수정 필요 */}
				<DayText>{getNameOfDay(dayOfTheWeek)}</DayText>
			</DailydateContainer>
		</DailydateLayout>
	);
};

const DailydateLayout = styled.div<{ type: string }>`
	display: flex;
	align-items: center;
	width: ${({ type }) => (type === 'long' ? '84rem' : '53.2rem')};
	height: 5.6rem;
	padding: 4px 8px;
`;
const DailydateContainer = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: baseline;
`;
const DateText = styled.h1`
	${({ theme }) => theme.fontTheme.HEADLINE_01};
`;
const DayText = styled.p`
	${({ theme }) => theme.fontTheme.CAPTION_01};
	color: ${({ theme }) => theme.palette.GREY_04};
`;
export default TextboxDailydate;
