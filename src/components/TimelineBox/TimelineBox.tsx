import styled from '@emotion/styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState } from 'react';

function TimelineBox() {
	const today = new Date().toDateString();
	const [currentView, setCurrentView] = useState('timeGridWeek');

	const handleViewChange = (view: any) => {
		setCurrentView(view.type);
	};

	return (
		<FullCalendarLayout>
			<FullCalendar
				initialView="timeGridWeek"
				plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'title today prev next timeGridDay,timeGridWeek,dayGridMonth',
					right: 'custom',
				}}
				views={{
					timeGridDay: {
						titleFormat: { year: 'numeric', month: 'short' },
					},
					timeGridWeek: {
						titleFormat: { year: 'numeric', month: 'short' },
					},
					dayGridMonth: {
						titleFormat: { year: 'numeric', month: 'short' },
					},
				}}
				customButtons={{
					custom: {
						text: '동기화',
						click: () => {},
					},
				}}
				slotDuration="00:30:00"
				editable
				selectable
				nowIndicator
				dayMaxEvents
				events={[
					{ title: 'Meeting', start: '2024-07-06T10:00:00', end: '2024-07-06T12:00:00' },
					{ title: 'Lunch', start: '2024-07-07T12:00:00' },
					{ title: 'All Day Event', start: '2024-07-06T10:00:00', end: '2024-07-06T12:00:00', allDay: true },
				]}
				eventColor="#DFE9FF"
				buttonText={{
					today: '오늘',
					month: '월간',
					week: '주간',
					day: '일간',
				}}
				allDayText="종일"
				titleFormat={{ year: 'numeric', month: 'long' }}
				locale="ko"
				slotLabelFormat={{
					hour: 'numeric',
					minute: '2-digit',
					meridiem: 'short',
					hour12: true,
				}}
				slotLabelContent={(arg) => {
					const formattedTime = new Intl.DateTimeFormat('en-US', {
						hour: 'numeric',
						hour12: true,
					}).format(arg.date);
					return <span>{formattedTime}</span>;
				}}
				dayHeaderContent={(arg) => {
					const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(arg.date);
					const date = arg.date.getDate();
					const isToday = arg.date.toDateString() === today;
					return (
						<>
							<WeekyDay isToday={isToday}>{day}</WeekyDay>
							{currentView !== 'dayGridMonth' && <WeekyDate isToday={isToday}>{date}</WeekyDate>}
						</>
					);
				}}
				viewDidMount={handleViewChange}
				datesSet={(dateInfo) => handleViewChange(dateInfo.view)}
			/>
		</FullCalendarLayout>
	);
}

const FullCalendarLayout = styled.div`
	width: 89.7rem;
	height: 93rem;

	/* 이벤트 박스 */
	.fc-event-main {
		width: 100%;
		height: 100%;
		padding: 0.4rem 0.6rem;

		color: ${(color) => color.theme.palette.GREY_04};

		box-shadow: 2px 0 0 0 #3876f6 inset;
		border: none;
		border-radius: 4px;
		${({ theme }) => theme.fontTheme.CAPTION_03};
	}

	.fc-timegrid-event-harness-inset .fc-timegrid-event {
		box-shadow: none;
		border: none;
	}

	.fc-h-event {
		border: none;
	}

	.fc-direction-ltr .fc-daygrid-event {
		margin: 0;
	}

	.fc-timegrid-event-harness > .fc-timegrid-event {
		inset: 0.1rem;
	}

	.fc-direction-ltr .fc-timegrid-col-events {
		margin: 0;
	}

	/* 요일 행 TEXT 중간 정렬 */
	.fc td,
	.fc th {
		vertical-align: middle;
		${({ theme }) => theme.fontTheme.CAPTION_01};
	}

	/* 타임 그리드 30분당 일정 */
	.fc .fc-timegrid-slot-label {
		width: 5.7rem;
		height: 2.4rem;

		color: ${(color) => color.theme.palette.GREY_04};

		border-bottom: none;
	}

	/* 요일 행 첫번째 border 없애기 */
	.fc-theme-standard td:first-of-type,
	.fc-theme-standard th:first-of-type {
		border: none;
	}

	/* 타임 그리드 종일 일정 */
	.fc-scrollgrid-shrink {
		max-height: 2.4rem;
	}

	/* 타임 그리드 종일 마진 없애기 */
	.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
		margin: 0;
	}

	.fc .fc-timegrid-divider {
		padding: 0;

		border: none;
	}

	.fc .fc-cell-shaded {
		background: none;
	}

	.fc .fc-timegrid-col,
	.fc .fc-daygrid-day {
		width: 12rem;
	}

	/* 30분 줄선 지우기 */
	.fc .fc-timegrid-slot-minor {
		border-top-style: none;
	}

	.fc-direction-ltr .fc-timegrid-slot-label-frame {
		text-align: left;
	}

	.fc .fc-timegrid-axis-frame {
		justify-content: center;
	}

	/* 요일 헤더 높이 조정 */
	.fc .fc-col-header-cell {
		width: 12rem;
		height: 5.5rem;

		border-right: none;
		border-left: none;
		border-radius: 8px 8px 0 0;
	}

	.fc-theme-standard .fc-scrollgrid {
		border-top: none;
		border-left: none;
	}

	.fc .fc-day-today {
		background: none;
	}

	.fc .fc-day-sun,
	.fc .fc-day-sat {
		background: #fafcff;
	}

	.fc-timeGridDay-view .fc-day-sun,
	.fc-timeGridDay-view .fc-day-sat {
		background: none;
	}

	.fc .fc-daygrid-day-frame {
		border-bottom: 1px solid #e0e0e0;
	}

	/* Custom button styles */
	.fc-toolbar-chunk .fc-button {
		width: 4.5rem;
		height: 2.6rem;
		padding: 0;

		background-color: #b9d0ff;
		border: none;
		border-radius: 8px;
	}

	.fc-toolbar-chunk .fc-button:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_HOVER};
	}

	.fc-toolbar-chunk .fc-button:active {
		background-color: ${({ theme }) => theme.palette.BLUE_PASSED};
	}

	.fc-direction-ltr .fc-toolbar > * > :not(:first-of-type) {
		margin-left: 0.4rem;
	}

	.fc-button-active:focus {
		box-shadow: none;
	}

	.fc-toolbar-chunk {
		display: flex;
		align-items: center;
	}

	.fc-toolbar-chunk .fc-prev-button,
	.fc-toolbar-chunk .fc-next-button {
		width: 2.6rem;
		height: 2.6rem;
		padding: 0;

		background-color: ${({ theme }) => theme.palette.BLACK_DEFAULT};
	}

	.fc-toolbar-chunk .fc-prev-button:hover,
	.fc-toolbar-chunk .fc-next-button:hover {
		background-color: ${({ theme }) => theme.palette.BLACK_HOVER};
	}

	.fc .fc-toolbar-title {
		margin-right: 2.6rem;
		${({ theme }) => theme.fontTheme.HEADLINE_02};
	}

	.fc-toolbar-chunk .fc-today-button {
		background-color: ${({ theme }) => theme.palette.BLACK_DEFAULT};
		opacity: 1;
	}

	.fc-toolbar-chunk .fc-today-button:hover {
		background-color: ${({ theme }) => theme.palette.BLACK_HOVER};
		opacity: 1;
	}

	.fc-toolbar-chunk .fc-today-button:active {
		background-color: ${({ theme }) => theme.palette.BLACK_PASSED};
		opacity: 1;
	}

	/* Override the button group border-radius styles */
	.fc-direction-ltr .fc-button-group > .fc-button {
		margin-right: 0.4rem;
		margin-left: 0;

		border-radius: 8px;
	}

	.fc .fc-button-group {
		margin-left: 5.4rem;
	}

	.fc .fc-custom-button {
		background-color: ${({ theme }) => theme.palette.BLACK_DEFAULT};
	}

	.fc .fc-custom-button:hover {
		background-color: ${({ theme }) => theme.palette.BLACK_HOVER};
	}

	/* 스타일링 현재 시간 표시 */
	.fc .fc-timegrid-now-indicator-line {
		height: 0.2rem;

		background-color: ${({ theme }) => theme.palette.PRIMARY};
		border: none;
	}

	.fc .fc-timegrid-now-indicator-arrow {
		display: none;
	}

	.fc-v-event .fc-event-main-frame {
		padding: 1px;
	}
`;

const WeekyDay = styled.div<{ isToday: boolean }>`
	${({ theme }) => theme.fontTheme.CAPTION_01};
	color: ${(props) => (props.isToday ? props.theme.palette.BLUE_DISABLED : props.theme.palette.GREY_04)};
	text-transform: uppercase;
`;

const WeekyDate = styled.div<{ isToday: boolean }>`
	${({ theme }) => theme.fontTheme.HEADLINE_01};
	color: ${(props) => (props.isToday ? props.theme.palette.PRIMARY : props.theme.palette.BLACK)};
`;

export default TimelineBox;
