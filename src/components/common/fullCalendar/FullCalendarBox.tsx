import styled from '@emotion/styled';
import { ViewMountArg, DatesSetArg, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DateSelectArg } from 'fullcalendar/index.js';
import { useState, useRef, useEffect } from 'react';

import Modal from '../modal/Modal';

import processEvents from './processEvents';

import useGetTimeBlock from '@/apis/timeBlocks/getTimeBlock/query';
import usePostTimeBlock from '@/apis/timeBlocks/postTimeBlock/query';
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
	const [range, setRange] = useState(7);
	const todayDate = new Date().toISOString().split('T')[0];
	const [startDate, setStartDate] = useState<string>(todayDate);

	const [isModalOpen, setModalOpen] = useState(false);
	const [modalTaskId, setModalTaskId] = useState<number | null>(null);
	const [modalTimeBlockId, setModalTimeBlockId] = useState<number | null>(null);

	const handleViewChange = (view: ViewMountArg) => {
		setCurrentView(view.view.type);
		updateRange(view.view.type);
	};

	const handleDatesSet = (dateInfo: DatesSetArg) => {
		setCurrentView(dateInfo.view.type);
		const currentViewType = dateInfo.view.type;
		const newStartDate = new Date(dateInfo.start);
		newStartDate.setDate(newStartDate.getDate() + 1);
		const formattedStartDate = newStartDate.toISOString().split('T')[0];

		setStartDate(formattedStartDate);
		updateRange(currentViewType);
	};

	const updateRange = (viewType: string) => {
		switch (viewType) {
			case 'dayGridMonth':
				setRange(30);
				break;
			case 'timeGridWeek':
				setRange(7);
				break;
			case 'timeGridDay':
				setRange(1);
				break;
			default:
				setRange(7);
		}
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

		// eslint-disable-next-line no-underscore-dangle
		const clickedEvent = info.event._def.extendedProps;

		if (clickedEvent) {
			setModalTaskId(clickedEvent.taskId);
			setModalTimeBlockId(clickedEvent.timeBlockId);
			setModalOpen(true);
		}
	};

	/** 모달 닫기 */
	const closeModal = () => {
		setModalOpen(false);
		setModalTaskId(null);
		setModalTimeBlockId(null);
	};

	// Get timeblock
	const { data: timeBlockData } = useGetTimeBlock({ startDate, range });
	console.log(timeBlockData?.data.data);

	const { mutate } = usePostTimeBlock();

	const { events, taskEvents } = timeBlockData
		? processEvents(timeBlockData.data.data)
		: { events: [], taskEvents: [] };

	// TODO: 캘린더 모달 상세조회 부분 구현 시 해당 부분 참고
	console.log('taskEvents', taskEvents);

	const calendarEvents = timeBlockData ? events : [];

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
				classNames: 'tasks',
			});

			const removeTimezone = (str: string) => str.replace(/:\d{2}[+-]\d{2}:\d{2}$/, '');

			const startStr = removeTimezone(selectInfo.startStr);
			const endStr = removeTimezone(selectInfo.endStr);

			mutate({ taskId: selectedTarget.id, startTime: startStr, endTime: endStr });
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
			{isModalOpen && modalTaskId !== null && modalTimeBlockId !== null && (
				<Modal
					isOpen={isModalOpen}
					sizeType={{ type: 'short' }}
					top={top}
					left={left}
					onClose={closeModal}
					taskId={modalTaskId}
					timeBlockId={modalTimeBlockId}
				/>
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
