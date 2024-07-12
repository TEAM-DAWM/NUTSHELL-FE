import styled from '@emotion/styled';

import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';
import NavBar from '@/components/common/NavBar';
import StagingArea from '@/components/common/StagingArea/StagingArea';
import TargetArea from '@/components/targetArea/TargetArea';

function Today() {
	return (
		<>
			<NavBar />

			<TodayLayout>
				<StagingArea />
				<TargetArea />
				<CalendarWrapper>
					<FullCalendarBox size="small" />
				</CalendarWrapper>
			</TodayLayout>
		</>
	);
}

export default Today;

const TodayLayout = styled.div`
	display: flex;
`;

const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: fit-content;
	height: 72.8rem;
	margin: 1rem 0;
	padding: 1.8rem 0.7rem 0 2.3rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;
