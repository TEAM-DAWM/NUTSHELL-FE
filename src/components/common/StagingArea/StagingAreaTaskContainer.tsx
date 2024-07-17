import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';

import BtnTaskContainer from '../BtnTaskContainer';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaTaskContainerProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
}

function StagingAreaTaskContainer(props: StagingAreaTaskContainerProps) {
	const { handleSelectedTarget, selectedTarget, tasks } = props;

	return (
		<StagingAreaTaskContainerLayout>
			<StagingAreaSetting />
			<BtnTaskContainer type="staging">
				{tasks.map((task, index) => (
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
