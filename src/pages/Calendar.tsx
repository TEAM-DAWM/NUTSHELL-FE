import styled from '@emotion/styled';

import CategoryBox from '@/components/calendarPage/CategoryBox';
import MiniCalendar from '@/components/calendarPage/miniCalendar/MiniCalendar';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';

function Calendar() {
	return (
		<CalendarLayout>
			<LeftSection>
				<MiniCalendar />
				<CategoryBox email="hongildong@gmail.com" categoryList={['내 할 일', '공부', '운동']} />
			</LeftSection>
			<RightSection>
				<FullCalendarBoxWapper>
					<FullCalendarBox size="big" />
				</FullCalendarBoxWapper>
			</RightSection>
		</CalendarLayout>
	);
}

const CalendarLayout = styled.div`
	display: flex;
	gap: 1rem;
	box-sizing: border-box;
	height: 76.8rem;
	padding: 1rem 1.6rem 1rem 0.7rem;
`;

const LeftSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: center;
	box-sizing: border-box;
	width: 33.4rem;
	height: 100%;
`;

const RightSection = styled.section`
	height: 74.8rem;
`;

const FullCalendarBoxWapper = styled.div`
	box-sizing: border-box;
	width: 94.4rem;
	height: 74.8rem;
	padding: 18px 0 0 17px;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;
export default Calendar;
