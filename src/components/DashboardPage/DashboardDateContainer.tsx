import styled from '@emotion/styled';

import getNameOfDayKor from '@/utils/getNameOfDayKor';
import getToday from '@/utils/getToday';

function DashboardDateContainer() {
	const today = new Date();
	const dayOfTheWeekKor = today.getDay();
	const { year, month, date } = getToday();
	return (
		<DateContainer>
			<DateText>
				{year}년 {month}월 {date}일
			</DateText>
			<DayText>{getNameOfDayKor(dayOfTheWeekKor)}</DayText>
		</DateContainer>
	);
}
const DateContainer = styled.div`
	display: flex;
	align-items: end;
	justify-content: flex-start;
	width: 25.3rem;
	padding: 2.8rem 2.1rem 2.2rem;
`;

const DateText = styled.h1`
	${({ theme }) => theme.fontTheme.HEADLINE_01}
	color : ${({ theme }) => theme.palette.Grey.Black}
`;

const DayText = styled.p`
	margin: 0.8rem 0.8rem 0;
	padding-bottom: 0.1rem;

	${({ theme }) => theme.fontTheme.LABEL_01};
	color: ${({ theme }) => theme.palette.Grey.Grey6};
`;
export default DashboardDateContainer;
