import { Draggable } from 'react-beautiful-dnd';

import BtnTask from '../common/BtnTask/BtnTask';
import BtnTaskContainer from '../common/BtnTaskContainer';

import useGetTasks from '@/apis/tasks/getTask/query';
import { TaskType } from '@/types/tasks/taskType';

interface TargetTaskSectionProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
}
function TargetTaskSection(props: TargetTaskSectionProps) {
	const { handleSelectedTarget, selectedTarget } = props;
	const targetDate = '2024-07-17';
	const { isFetched, data } = useGetTasks({ targetDate });
	console.log(data);
	return (
		<BtnTaskContainer type="target">
			{isFetched && (
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
