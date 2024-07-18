import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import useGetTasks from '@/apis/tasks/getTask/query';
import updateTaskStatus from '@/apis/tasks/updateTaskStatus/axios';
import { UpdateTaskStatusType } from '@/apis/tasks/updateTaskStatus/UpdateTaskStatusType';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';
import NavBar from '@/components/common/NavBar';
import StagingArea from '@/components/common/StagingArea/StagingArea';
import TargetArea from '@/components/targetArea/TargetArea';
import { SortOrderType } from '@/types/sortOrderType';
import { TaskType } from '@/types/tasks/taskType';
import formatDatetoLocalDate from '@/utils/formatDatetoLocalDate';

function Today() {
	const [selectedTarget, setSelectedTarget] = useState<TaskType | null>(null);
	const [activeButton, setActiveButton] = useState<'전체' | '지연'>('전체');
	const [sortOrder, setSortOrder] = useState<SortOrderType>('recent');
	const isTotal = activeButton === '전체';
	const [selectedDate, setTargetDate] = useState(new Date());

	// Task 목록 Get
	/** StagingArea */
	const { data: stagingData } = useGetTasks({ isTotal, sortOrder });

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

	const targetDate = formatDatetoLocalDate(selectedDate);

	/** TargetArea */
	const { data: targetData } = useGetTasks({ targetDate });

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (updateData: UpdateTaskStatusType) => updateTaskStatus(updateData),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['today'] }),
	});

	const handleDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		// 드래그가 끝난 위치가 없으면 리턴
		if (!destination) return;

		// sourceTasks와 destinationTasks를 배열로 변환
		const sourceTasks = source.droppableId === 'target' ? [...targetData.data.tasks] : [...stagingData.data.tasks];
		const destinationTasks =
			destination.droppableId === 'target' ? [...targetData.data.tasks] : [...stagingData.data.tasks];

		// 드래그된 항목을 sourceTasks에서 제거하고 destinationTasks에 추가
		const [movedTask] = sourceTasks.splice(source.index, 1);
		destinationTasks.splice(destination.index, 0, movedTask);

		// 상태 업데이트
		if (source.droppableId === 'target') {
			queryClient.setQueryData(['tasks'], {
				target: { ...targetData, data: { ...targetData.data, tasks: sourceTasks } },
				staging: { ...stagingData, data: { ...stagingData.data, tasks: destinationTasks } },
			});
		} else {
			queryClient.setQueryData(['tasks'], {
				target: { ...targetData, data: { ...targetData.data, tasks: destinationTasks } },
				staging: { ...stagingData, data: { ...stagingData.data, tasks: sourceTasks } },
			});
		}

		// API 호출
		if (destination.droppableId === 'target') {
			mutate({
				taskId: movedTask.id,
				targetDate,
				status: '미완료',
			});
		} else if (destination.droppableId === 'staging') {
			mutate({
				taskId: movedTask.id,
				targetDate: null,
				status: null,
			});
		}
	};

	return (
		<>
			<NavBar />

			<TodayLayout>
				<DragDropContext onDragEnd={handleDragEnd}>
					<StagingArea
						handleSelectedTarget={handleSelectedTarget}
						selectedTarget={selectedTarget}
						tasks={stagingData.data.tasks}
						handleSortOrder={handleSortOrder}
						handleTextBtnClick={handleTextBtnClick}
						activeButton={activeButton}
						sortOrder={sortOrder}
					/>

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
