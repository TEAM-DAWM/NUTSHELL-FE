import styled from '@emotion/styled';
import { ViewMountArg, DatesSetArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState, useRef, useEffect } from 'react';

import RefreshBtn from '@/components/common/button/RefreshBtn';
import DayHeaderContent from '@/components/common/fullCalendar/DayHeaderContent';
import FullCalendarLayout from '@/components/common/fullCalendar/FullCalendarStyle';
import { customDayCellContent, customSlotLabelContent } from '@/components/common/fullCalendar/fullCalendarUtils';

interface FullCalendarBoxProps {
	size: 'small' | 'big';
	selectDate?: Date | null;
}

function FullCalendarBox({ size, selectDate }: FullCalendarBoxProps) {
	const today = new Date().toDateString();
	const [currentView, setCurrentView] = useState('timeGridWeek');

	const handleViewChange = (view: ViewMountArg) => {
		setCurrentView(view.view.type);
	};

	const handleDatesSet = (dateInfo: DatesSetArg) => {
		setCurrentView(dateInfo.view.type);
	};

	const calendarRef = useRef<FullCalendar>(null);
	useEffect(() => {
		if (selectDate && calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.gotoDate(selectDate);
		}
	}, [selectDate]);

	return (
		<FullCalendarLayout size={size}>
			<CustomButtonContainer>
				<RefreshBtn isDisabled={false} />
			</CustomButtonContainer>
			<FullCalendar
				ref={calendarRef}
				initialView="timeGridWeek"
				plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'title today prev next timeGridDay,timeGridWeek,dayGridMonth',
					right: '',
				}}
				views={{
					timeGridDay: {
						titleFormat: { year: 'numeric', month: 'short' },
					},
					timeGridWeek: {
						titleFormat(date) {
							return `${date.date.year}년 ${date.date.month + 1}월`;
						},
					},
					dayGridMonth: {
						titleFormat: { year: 'numeric', month: 'short' },
					},
				}}
				slotDuration="00:30:00"
				editable
				selectable
				nowIndicator
				dayMaxEvents
				// netshell에서 할당한 이벤트 : tasks, 구글 캘린더에서 가져온 이벤트 : schedule
				events={[
					{ title: 'Meeting', start: '2024-07-06T10:00:00', end: '2024-07-06T12:00:00', classNames: 'tasks' },
					{ title: 'Lunch', start: '2024-07-07T12:00:00', end: '2024-07-07T12:45:00', classNames: 'tasks' },
					{ title: 'Lunch', start: '2024-07-08T12:00:00', end: '2024-07-08T12:30:00', classNames: 'tasks' },
					{
						title: 'All Day Event',
						start: '2024-07-08T10:00:00',
						end: '2024-07-08T12:00:00',
						allDay: true,
						classNames: 'task',
					},
					{ title: 'Meeting', start: '2024-07-11T10:00:00', end: '2024-07-11T12:00:00', classNames: 'schedule' },
					{ title: 'Lunch', start: '2024-07-12T12:00:00', end: '2024-07-12T12:45:00', classNames: 'schedule' },
					{ title: 'Lunch', start: '2024-07-11T12:00:00', end: '2024-07-11T12:30:00', classNames: 'schedule' },
					{
						title: 'All Day Event',
						start: '2024-07-12T10:00:00',
						end: '2024-07-12T12:00:00',
						allDay: true,
						classNames: 'schedule',
					},
				]}
				buttonText={{
					today: '오늘',
					month: '월간',
					week: '주간',
					day: '일간',
				}}
				allDayText="종일"
				locale="ko"
				slotLabelFormat={{
					hour: 'numeric',
					minute: '2-digit',
					meridiem: 'short',
					hour12: true,
				}}
				slotLabelContent={customSlotLabelContent}
				/* eslint-disable */
				dayHeaderContent={(arg) => <DayHeaderContent arg={arg} currentView={currentView} today={today} />}
				viewDidMount={handleViewChange}
				datesSet={handleDatesSet}
				dayCellContent={customDayCellContent}
				eventTimeFormat={{
					hour: 'numeric',
					minute: '2-digit',
					hour12: false,
				}}
				droppable={true}
			/>
		</FullCalendarLayout>
	);
}

const CustomButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	width: 100%;
	margin-bottom: -2.6rem;
	padding-right: 1rem;
`;

export default FullCalendarBox;
