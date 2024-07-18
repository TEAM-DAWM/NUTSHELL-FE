import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';

import BtnTask from '../common/BtnTask/BtnTask';
import BtnTaskContainer from '../common/BtnTaskContainer';
import EmptyContainer from '../common/EmptyContainer';

import { TaskType } from '@/types/tasks/taskType';

interface TargetTaskSectionProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
}
function TargetTaskSection(props: TargetTaskSectionProps) {
	const { handleSelectedTarget, selectedTarget, tasks } = props;

	return (
		<BtnTaskContainer type="target">
			{tasks.length === 0 ? (
				<EmptyLayout>
					<EmptyContainer />
				</EmptyLayout>
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
										iconType="active"
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
				</>
			)}
		</BtnTaskContainer>
	);
}

export default TargetTaskSection;

const EmptyLayout = styled.div`
	margin: 14.85rem 0 27.95rem;
`;
