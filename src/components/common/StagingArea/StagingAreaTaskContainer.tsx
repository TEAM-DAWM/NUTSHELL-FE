import styled from '@emotion/styled';

import BtnTaskContainer from '../BtnTaskContainer';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaTaskContainerProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
}
function StagingAreaTaskContainer({ handleSelectedTarget, selectedTarget }: StagingAreaTaskContainerProps) {
	const dummyTaskList: TaskType[] = [
		{
			id: 3,
			name: '김지원',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
	];

	return (
		<StagingAreaTaskContainerLayout>
			<StagingAreaSetting />
			<BtnTaskContainer type="staging">
				{dummyTaskList.map((task) => (
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
						preventDoubleClick={false}
					/>
				))}
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
