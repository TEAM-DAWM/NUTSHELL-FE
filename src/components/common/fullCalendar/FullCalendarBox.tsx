import styled from '@emotion/styled';
import { ViewMountArg, DatesSetArg, EventClickArg, EventDropArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DateSelectArg, EventResizeDoneArg } from 'fullcalendar/index.js';
import { useState, useRef, useEffect } from 'react';

import Modal from '../modal/Modal';

import processEvents from './processEvents';

import useGetTimeBlock from '@/apis/timeBlocks/getTimeBlock/query';
import usePostTimeBlock from '@/apis/timeBlocks/postTimeBlock/query';
import useUpdateTimeBlock from '@/apis/timeBlocks/updateTimeBlock/query';
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
	targetDate: Date | null;
}

function FullCalendarBox({ size, selectDate, selectedTarget, targetDate }: FullCalendarBoxProps) {
	const today = new Date().toDateString();
	const todayDate = new Date().toISOString().split('T')[0];
	const [currentView, setCurrentView] = useState('timeGridWeek');
	const [range, setRange] = useState(7);
	const [startDate, setStartDate] = useState<string>(todayDate);
	const [isModalOpen, setModalOpen] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const calendarRef = useRef<FullCalendar>(null);

	const { data: timeBlockData } = useGetTimeBlock({ startDate, range });
	const { mutate: createMutate } = usePostTimeBlock();
	const { mutate: updateMutate } = useUpdateTimeBlock();

	const calendarEvents = timeBlockData ? processEvents(timeBlockData.data.data) : [];

	useEffect(() => {
		if (selectDate && calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.gotoDate(selectDate);
		}
	}, [selectDate]);

	const handleViewChange = (view: ViewMountArg) => {
		setCurrentView(view.view.type);
		updateRange(view.view.type);
	};

	const handleDatesSet = (dateInfo: DatesSetArg) => {
		const currentViewType = dateInfo.view.type;
		const newStartDate = new Date(dateInfo.start);
		newStartDate.setDate(newStartDate.getDate() + 1);
		const formattedStartDate = newStartDate.toISOString().split('T')[0];

		setCurrentView(dateInfo.view.type);
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

	const handleEventClick = (info: EventClickArg) => {
		const rect = info.el.getBoundingClientRect();
		const calculatedTop = rect.top;
		const adjustedTop = Math.min(calculatedTop, MODAL.SCREEN_HEIGHT - MODAL.TASK_MODAL_HEIGHT);
		setTop(adjustedTop);
		setLeft(rect.left - MODAL.TASK_MODAL_WIDTH + 40);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 75c073b (fix: 삽질)
	// Get timeblock
	const { data: timeBlockData } = useGetTimeBlock({ startDate, range });
	console.log('timeBlockData.data.data', timeBlockData?.data.data);

	const { mutate } = usePostTimeBlock();

	const calendarEvents = timeBlockData ? processEvents(timeBlockData.data.data) : [];

	/** 드래그해서 이벤트 추가하기 */
>>>>>>> 6f9f435 (feat: staging area 모달 api 연결)
	const addEventWhenDragged = (selectInfo: DateSelectArg) => {
		if (calendarRef.current && (selectedTarget?.id === 0 || selectedTarget)) {
			const calendarApi = calendarRef.current.getApi();

			const existingEvents = calendarApi.getEvents();
			existingEvents.forEach((event) => {
				if (event.id === selectedTarget.id.toString()) {
					event.remove();
				}
			});

			calendarApi.addEvent({
				id: selectedTarget.id.toString(),
				title: selectedTarget.name,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
				classNames: 'tasks',
				extendedProps: {
					taskId: selectedTarget.id,
					timeBlockId: null,
				},
			});

			const removeTimezone = (str: string) => str.replace(/:\d{2}[+-]\d{2}:\d{2}$/, '');

			const startStr = removeTimezone(selectInfo.startStr);
			const endStr = removeTimezone(selectInfo.endStr);

			createMutate({ taskId: selectedTarget.id, startTime: startStr, endTime: endStr });
		}
	};

	const updateEvent = (info: EventDropArg | EventResizeDoneArg) => {
		const { event } = info;
		const { taskId, timeBlockId } = event.extendedProps;
		const removeTimezone = (str: string) => str.replace(/:\d{2}[+-]\d{2}:\d{2}$/, '');

		const startStr = removeTimezone(event.startStr);
		const endStr = removeTimezone(event.endStr);

		if (taskId && taskId !== -1) {
			updateMutate({ taskId, timeBlockId, startTime: startStr, endTime: endStr });
		}
	};

	const handleSelect = (selectInfo: DateSelectArg) => {
		if (calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.unselect();
		}

		if (selectedTarget) {
			addEventWhenDragged(selectInfo);
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
				droppable
				eventClick={handleEventClick}
				select={handleSelect} // 선택된 날짜가 변경될 때마다 호출
				eventDrop={updateEvent} // 기존 이벤트 드래그 수정 핸들러
				eventResize={updateEvent} // 기존 이벤트 리사이즈 수정 핸들러
			/>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					sizeType={{ type: 'short' }}
					top={top}
					left={left}
					onClose={closeModal}
<<<<<<< HEAD
					taskId={5} // 예시 taskId, 실제 데이터로 교체 필요
=======
					taskId={5}
					targetDate={targetDate}
>>>>>>> 0ec9b61 (feat: time block 모달 상세 구현)
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
