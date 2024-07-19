import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';

import BtnTaskContainer from '../BtnTaskContainer';
import EmptyContainer from '../EmptyContainer';
import ScrollGradient from '../ScrollGradient';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaTaskContainerProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
	targetDate: string;
}

function StagingAreaTaskContainer({ handleSelectedTarget, selectedTarget, tasks }: StagingAreaTaskContainerProps) {
	return (
		<StagingAreaTaskContainerLayout>
			<BtnTaskContainer type="staging">
				{tasks.length === 0 ? (
					<EmptyContainer />
				) : (
					<>
						{tasks.map((task: TaskType, index: number) => (
							<Draggable key={task.id} draggableId={task.id.toString()} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={{ userSelect: 'none', ...provided.draggableProps.style }}
									>
										<BtnTask
											iconType="stagingOrDelayed"
											key={task.id}
											hasDescription={task.hasDescription}
											name={task.name}
											deadLine={task.deadLine}
											status={task.status}
											id={task.id}
											handleSelectedTarget={handleSelectedTarget}
											selectedTarget={selectedTarget}
											isDragging={snapshot.isDragging}
										/>
									</div>
								)}
							</Draggable>
						))}
						<ScrollGradient />
					</>
				)}
			</BtnTaskContainer>
		</StagingAreaTaskContainerLayout>
	);
}

export default StagingAreaTaskContainer;

const StagingAreaTaskContainerLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	margin-top: 1.3rem;
`;
