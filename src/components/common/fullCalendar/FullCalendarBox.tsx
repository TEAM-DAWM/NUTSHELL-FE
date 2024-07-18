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
	const [startDate, setStartDate] = useState<string>('');

	const [isModalOpen, setModalOpen] = useState(false);

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
		setModalOpen(true);
	};

	/** 모달 닫기 */
	const closeModal = () => {
		setModalOpen(false);
	};

	// Get timeblock
	const { data: timeBlockData } = useGetTimeBlock({ startDate, range });
	console.log('timeBlockData.data.data', timeBlockData?.data.data);

	const calendarEvents = timeBlockData ? processEvents(timeBlockData.data.data) : [];

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
				// 🚨 임시 taskID ... 데이터 형식 확정 후 수정할 것 🚨
				<Modal
					isOpen={isModalOpen}
					sizeType={{ type: 'short' }}
					top={top}
					left={left}
					onClose={closeModal}
					taskId={5}
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
