import styled from '@emotion/styled';
import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import useGetTasks from '@/apis/tasks/getTask/query';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';
import NavBar from '@/components/common/NavBar';
import StagingArea from '@/components/common/StagingArea/StagingArea';
import TargetArea from '@/components/targetArea/TargetArea';
import { SortOrderType } from '@/types/sortOrderType';
import { TaskType } from '@/types/tasks/taskType';
import formatDatetoLocalDate from '@/utils/formatDatetoLocalDate';

interface TaskState {
	[key: string]: TaskType[];
	staging: TaskType[];
	target: TaskType[];
}

const dummyTasks: TaskState = {
	staging: [
		{
			id: 0,
			name: '바보~',
			deadLine: { date: '2024-06-30', time: '12:30' },
			hasDescription: false,
			status: '진행중',
		},
		{ id: 1, name: '넛수레', deadLine: { date: '2024-06-30', time: '12:30' }, hasDescription: true, status: '지연' },
		{ id: 2, name: '콘하스', deadLine: { date: '2024-06-30', time: '12:30' }, hasDescription: true, status: '완료' },
		{
			id: 3,
			name: '김지원',
			deadLine: { date: '2024-06-30', time: '12:30' },
			hasDescription: true,
			status: '미완료',
		},
	],
	target: [
		{
			id: 4,
			name: '먀먀',
			deadLine: { date: '2024-06-30', time: '12:30' },
			hasDescription: true,
			status: '미완료',
		},
	],
};

function Today() {
	const [tasks, setTasks] = useState<TaskState>(dummyTasks);
	const [selectedTarget, setSelectedTarget] = useState<TaskType | null>(null);
	const [activeButton, setActiveButton] = useState<'전체' | '지연'>('전체');
	const [sortOrder, setSortOrder] = useState<SortOrderType>('recent');
	const isTotal = activeButton === '전체';

	// Task 목록 Get

	/** StagingArea */
	const { isFetched: isStagingFetched, data: stagingData } = useGetTasks({ isTotal, sortOrder });

	console.log('stagingArea_taskList', stagingData);

	/** isTotal 핸들링 함수 */
	const handleTextBtnClick = (button: '전체' | '지연') => {
		setActiveButton(button);
	};

	const handleSortOrder = (order: SortOrderType) => {
		setSortOrder(order);
	};

	const handleSelectedTarget = (task: TaskType | null) => {
		setSelectedTarget(task);
	};

	/** TargetArea */
	const [selectedDate, setTargetDate] = useState(new Date());

	const targetDate = formatDatetoLocalDate(selectedDate);

	const { isFetched: isTargetFetched, data: targetData } = useGetTasks({ targetDate });

	console.log('targetArea_taskList', stagingData);

	const handlePrevBtn = () => {
		const newDate = new Date(selectedDate);
		newDate.setDate(newDate.getDate() - 1);
		setTargetDate(newDate);
	};

	const handleNextBtn = () => {
		const newDate = new Date(selectedDate);
		newDate.setDate(newDate.getDate() + 1);
		setTargetDate(newDate);
	};

	const handleTodayBtn = () => {
		setTargetDate(new Date());
	};

	const handleChangeDate = (target: Date) => {
		setTargetDate(target);
	};

	const handleDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		// 드래그가 끝난 위치가 없으면 리턴
		if (!destination) return;

		// TODO: api 연결 시에는 밑에 부분 지우고 api 호출 예정

		// // 같은 위치로 드래그 -> 되면 안됨
		// if (source.droppableId === destination.droppableId && source.index === destination.index) {
		// 	return;
		// }

		// 다른 위치로 드래그
		const sourceClone = Array.from(tasks[source.droppableId as keyof typeof tasks]);
		const destClone =
			source.droppableId === destination.droppableId
				? sourceClone
				: Array.from(tasks[destination.droppableId as keyof typeof tasks]);

		const [removed] = sourceClone.splice(source.index, 1);

		destClone.splice(destination.index, 0, removed);

		const newTasks: TaskState = {
			...tasks,
			[source.droppableId]: sourceClone,
		};

		if (source.droppableId !== destination.droppableId) {
			newTasks[destination.droppableId] = destClone;
		}

		setTasks(newTasks);
	};

	return (
		<>
			<NavBar />

			<TodayLayout>
				<DragDropContext onDragEnd={handleDragEnd}>
					{isStagingFetched && (
						<StagingArea
							handleSelectedTarget={handleSelectedTarget}
							selectedTarget={selectedTarget}
							tasks={stagingData.data.tasks}
							handleSortOrder={handleSortOrder}
							handleTextBtnClick={handleTextBtnClick}
							activeButton={activeButton}
							sortOrder={sortOrder}
						/>
					)}
					{isTargetFetched && (
						<TargetArea
							handleSelectedTarget={handleSelectedTarget}
							selectedTarget={selectedTarget}
							tasks={targetData.data.tasks}
							onClickPrevDate={handlePrevBtn}
							onClickNextDate={handleNextBtn}
							onClickTodayDate={handleTodayBtn}
							onClickDatePicker={handleChangeDate}
							targetDate={selectedDate}
						/>
					)}
				</DragDropContext>
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
