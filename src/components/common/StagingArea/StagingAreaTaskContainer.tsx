import styled from '@emotion/styled';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import BtnTaskContainer from '../BtnTaskContainer';
import EmptyContainer from '../EmptyContainer';
import ScrollGradient from '../ScrollGradient';

import useGetTasks from '@/apis/tasks/getTask/query';
import BtnTask from '@/components/common/BtnTask/BtnTask';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import { SortOrderType } from '@/types/sortOrderType';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaTaskContainerProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
}

function StagingAreaTaskContainer({ handleSelectedTarget, selectedTarget }: StagingAreaTaskContainerProps) {
	const [activeButton, setActiveButton] = useState<'전체' | '지연'>('전체');
	const [sortOrder, setSortOrder] = useState<SortOrderType>('recent');
	const isTotal = activeButton === '전체';

	// Task 목록 Get
	const { data } = useGetTasks({ isTotal, sortOrder });

	/** isTotal 핸들링 함수 */
	const handleTextBtnClick = (button: '전체' | '지연') => {
		setActiveButton(button);
	};

	const handleSortOrder = (order: SortOrderType) => {
		setSortOrder(order);
	};
	console.log(data);

	return (
		<StagingAreaTaskContainerLayout>
			<StagingAreaSetting
				handleTextBtnClick={handleTextBtnClick}
				activeButton={activeButton}
				sortOrder={sortOrder}
				handleSortOrder={handleSortOrder}
			/>
			<BtnTaskContainer type="staging">
				{data.data.tasks.length === 0 ? (
					<EmptyContainer />
				) : (
					<>
						{data.data.tasks.map((task: TaskType, index: number) => (
							<Draggable key={task.id} draggableId={task.id.toString()} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={{ userSelect: 'none', ...provided.draggableProps.style }}
									>
										<BtnTask
											key={task.id + task.name}
											iconType="stagingOrDelayed"
											hasDescription={task.hasDescription}
											id={task.id}
											name={task.name}
											status={task.status}
											deadLine={task.deadLine}
											selectedTarget={selectedTarget}
											handleSelectedTarget={handleSelectedTarget}
											isDragging={snapshot.isDragging}
										/>
									</div>
								)}
							</Draggable>
						))}
					</>
				)}

				<ScrollGradient />
			</BtnTaskContainer>
		</StagingAreaTaskContainerLayout>
	);
}

export default StagingAreaTaskContainer;

const StagingAreaTaskContainerLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	align-items: flex-start;
	align-self: stretch;
`;
