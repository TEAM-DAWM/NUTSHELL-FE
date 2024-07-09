import styled from '@emotion/styled';
import { DayHeaderContentArg } from '@fullcalendar/core';

interface DayHeaderContentProps {
	arg: DayHeaderContentArg;
	currentView: string;
	today: string;
}

function DayHeaderContent({ arg, currentView, today }: DayHeaderContentProps) {
	const isTimeGridDay = currentView === 'timeGridDay';
	const day = new Intl.DateTimeFormat('en-US', { weekday: isTimeGridDay ? 'long' : 'short' }).format(arg.date);
	const date = arg.date.getDate();
	const isToday = arg.date.toDateString() === today;

	return (
		<div>
			{!isTimeGridDay ? (
				<>
					<WeekDay isToday={isToday}>{day}</WeekDay>
					{currentView !== 'dayGridMonth' && <WeekDate isToday={isToday}>{date}</WeekDate>}
				</>
			) : (
				<DayLayout>
					<WeekDate isToday={false}>{date}일</WeekDate> <WeekDay isToday={false}>{day}</WeekDay>
				</DayLayout>
			)}
		</div>
	);
}

const DayLayout = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: flex-end;
	margin-left: 0.8rem;
`;

const WeekDay = styled.div<{ isToday: boolean }>`
	${({ theme }) => theme.fontTheme.CAPTION_02};
	color: ${({ isToday, theme }) => (isToday ? theme.palette.Blue.Blue11 : theme.palette.Grey.Grey6)};
	text-transform: uppercase;
`;

const WeekDate = styled.div<{ isToday: boolean }>`
	${({ theme }) => theme.fontTheme.HEADLINE_01};
	color: ${({ isToday, theme }) => (isToday ? theme.palette.Primary : theme.palette.Grey.Black)};
`;

export default DayHeaderContent;
