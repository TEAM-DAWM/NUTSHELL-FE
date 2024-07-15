import styled from '@emotion/styled';
import { ViewMountArg, DatesSetArg, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DateSelectArg } from 'fullcalendar/index.js';
import { useState, useRef, useEffect } from 'react';

import Modal from '../modal/Modal';

import RefreshBtn from '@/components/common/button/RefreshBtn';
import DayHeaderContent from '@/components/common/fullCalendar/DayHeaderContent';
import FullCalendarLayout from '@/components/common/fullCalendar/FullCalendarStyle';
import { customDayCellContent, customSlotLabelContent } from '@/components/common/fullCalendar/fullCalendarUtils';
import MODAL from '@/constants/modalLocation';
import { TaskType } from '@/types/tasks/taskType';

interface FullCalendarBoxProps {
	size: 'small' | 'big';
	selectDate?: Date | null;
	selectedTarget?: TaskType | null;
}

function FullCalendarBox({ size, selectDate, selectedTarget }: FullCalendarBoxProps) {
	const today = new Date().toDateString();
	const [currentView, setCurrentView] = useState('timeGridWeek');

	const [isModalOpen, setModalOpen] = useState(false);

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

	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleEventClick = (info: EventClickArg) => {
		const rect = info.el.getBoundingClientRect();
		const calculatedTop = rect.top;
		const adjustedTop = Math.min(calculatedTop, MODAL.SCREEN_HEIGHT - MODAL.TASK_MODAL_HEIGHT);
		setTop(adjustedTop);
		setLeft(rect.left - MODAL.TASK_MODAL_WIDTH + 40);
		setModalOpen(true);
	};

	/** 모달 닫기 */
	const closeModal = () => {
		setModalOpen(false);
	};

	const calendarEvents = [
		{ title: 'Meeting', start: '2024-07-16T10:00:00', end: '2024-07-06T12:00:00', classNames: 'tasks' },
		{ title: 'Lunch', start: '2024-07-07T12:00:00', end: '2024-07-07T12:45:00', classNames: 'tasks' },
		{ title: 'Lunch', start: '2024-07-08T12:00:00', end: '2024-07-08T12:30:00', classNames: 'tasks' },
		{
			title: 'All Day Event',
			start: '2024-07-08T10:00:00',
			end: '2024-07-08T12:00:00',
			allDay: true,
			classNames: 'task',
		},
		{ title: 'Meeting', start: '2024-07-15T10:00:00', end: '2024-07-11T12:00:00', classNames: 'schedule' },
		{ title: 'Lunch', start: '2024-07-12T12:00:00', end: '2024-07-12T12:45:00', classNames: 'schedule' },
		{ title: 'Lunch', start: '2024-07-11T12:00:00', end: '2024-07-11T12:30:00', classNames: 'schedule' },
		{
			title: 'All Day Event',
			start: '2024-07-12T10:00:00',
			end: '2024-07-12T12:00:00',
			allDay: true,
			classNames: 'schedule',
		},
	];

	/** 드래그해서 이벤트 추가하기 */
	const addEventWhenDragged = (selectInfo: DateSelectArg) => {
		if (calendarRef.current && (selectedTarget?.id === 0 || selectedTarget)) {
			const calendarApi = calendarRef.current.getApi();

			// 기존에 같은 id 가진 이벤트가 캘린더에 있다면 삭제
			const existingEvents = calendarApi.getEvents();
			existingEvents.forEach((event) => {
				if (event.id === selectedTarget.id.toString()) {
					event.remove();
				}
			});

			// 이벤트 추가
			calendarApi.addEvent({
				id: selectedTarget.id.toString(),
				title: selectedTarget.name,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
				// 구글캘린더 여부에 따라 수정하면 될듯?
				classNames: 'new-event',
			});
		}
	};
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
				events={calendarEvents}
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
				eventClick={handleEventClick}
				select={addEventWhenDragged}
			/>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} sizeType={{ type: 'short' }} top={top} left={left} onClose={closeModal} />
			)}
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
