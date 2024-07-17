import BtnTask from '../common/BtnTask/BtnTask';
import BtnTaskContainer from '../common/BtnTaskContainer';
import ScrollGradient from '../common/ScrollGradient';

import { TaskType } from '@/types/tasks/taskType';

interface TargetTaskSectionProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
}
function TargetTaskSection({ handleSelectedTarget, selectedTarget }: TargetTaskSectionProps) {
	const dummyTaskList: TaskType[] = [
		{
			id: 0,
			name: '바보~',
			deadLine: {
				date: null,
				time: null,
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '넛수레',
			deadLine: {
				date: '2024-08-29',
				time: '10:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '콘하스',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
	];

	return (
		<BtnTaskContainer type="target">
			{dummyTaskList.map((task) => (
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
				/>
			))}
			<ScrollGradient />
		</BtnTaskContainer>
	);
}

export default TargetTaskSection;
