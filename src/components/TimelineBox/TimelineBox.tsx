import styled from '@emotion/styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const TimelineBox = () => {
	return (
		<FullCalendarLayout>
			<FullCalendar
				initialView="timeGridWeek"
				plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'title',
					center: 'today,prev,next timeGridDay,timeGridWeek,dayGridMonth',
					right: 'dayGridMonth',
				}}
				titleFormat={{ year: 'numeric', month: 'short' }}
				// locale="ko"
				slotDuration="00:30:00"
				editable={true}
				selectable={true}
				events={[
					{ title: 'Meeting', start: '2024-07-06T10:00:00', end: '2024-07-06T12:00:00' },
					{ title: 'Lunch', start: '2024-07-07T12:00:00' },
				]}
				eventColor="#DFE9FF"
				buttonText={{
					today: '오늘',
					month: '월간',
					week: '주간',
					day: '일간',
				}}
			/>
		</FullCalendarLayout>
	);
};

const FullCalendarLayout = styled.div`
	width: 89.7rem;
	height: 93rem;

	.fc-event-main {
		color: ${(color) => color.theme.palette.BLACK};
	}

	/* 요일 행 TEXT 중간 정렬 */
	.fc td,
	.fc th {
		vertical-align: middle;
	}

	/* 타임 그리드 30분당 일정 */
	.fc .fc-timegrid-slot-label {
		height: 2.4rem;
	}

	/* 요일 행 첫번째 border 없애기 */
	.fc-theme-standard td:first-of-type,
	.fc-theme-standard th:first-of-type {
		border: none;
	}

	/* 타임 그리드 종일 일정 */
	.fc-scrollgrid-shrink {
		height: 2.4rem;

		border-bottom: 1px solid #000;
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
		text-align: center;
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

	.fc .fc-day-sun {
		background: #fafcff;
	}

	.fc .fc-day-sat {
		background: #fafcff;
	}

	.fc .fc-daygrid-day-frame {
		border-bottom: 1px solid #e0e0e0;
	}
`;

export default TimelineBox;
