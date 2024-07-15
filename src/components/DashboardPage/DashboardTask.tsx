import styled from '@emotion/styled';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import DASHBOARD_TASK_TYPE from '@/constants/dashboardTask';
import TODAY from '@/constants/tasksToday';
import { TaskType } from '@/types/tasks/taskType';
import { useState } from 'react';

interface DashboardTaskProps {
	text: 'upcoming' | 'postponed' | 'inprogress';
}

function DashboardTask({ text }: DashboardTaskProps) {
	const [selectedTarget, setSelectedTarget] = useState<TaskType | null>(null);
	const handleSelectedTarget = (task: TaskType | null) => {
		setSelectedTarget(task);
	};
	let taskStatus = '';
	if (text === 'upcoming') {
		taskStatus = DASHBOARD_TASK_TYPE.UPCOMING;
	} else if (text === 'postponed') {
		taskStatus = DASHBOARD_TASK_TYPE.POSTPONED;
	} else if (text === 'inprogress') {
		taskStatus = DASHBOARD_TASK_TYPE.INPROGRESS;
	}

	const dummyTaskList: TaskType[] = [
		{
			id: 10,
			name: '바보~',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 11,
			name: '넛수레',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 12,
			name: '콘하스',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 13,
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
		<TaskLayout>
			<TextBox>
				<TaskText text={text}>{taskStatus}</TaskText>
				<NumberTextBox>
					<Number>{TODAY.data.tasks.length}</Number>
					<NumberText>개</NumberText>
				</NumberTextBox>
			</TextBox>
			<ScrollArea>
				{dummyTaskList.map((task) => (
					<BtnTask
						key={task.id + task.name}
						hasDescription={task.hasDescription}
						id={task.id}
						name={task.name}
						status={task.status}
						deadLine={task.deadLine}
						btnType="target"
						selectedTarget={selectedTarget}
						handleSelectedTarget={handleSelectedTarget}
					/>
				))}
				<ScrollGradient />
			</ScrollArea>
		</TaskLayout>
	);
}
export default DashboardTask;

const TaskLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 41.7rem;
	height: 41rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;

const TextBox = styled.span`
	display: flex;
	justify-content: space-between;
	width: 41.7rem;
	height: 7rem;
`;

const TaskText = styled.div<{ text: string }>`
	display: flex;
	align-items: flex-start;
	min-width: 11.8rem;
	padding: 1.8rem 0 2rem 2.2rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02};

	color: ${({ theme }) => theme.palette.Grey.Black};
`;

const NumberTextBox = styled.div`
	display: flex;
	align-items: center;
	width: 3.8rem;
	height: 4rem;
	margin: 1.5rem 2.2rem 1.5rem 0;
`;

const Number = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_02};
	color: ${({ theme }) => theme.palette.Grey.Grey8};
`;

const NumberText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Grey7}
`;

const ScrollArea = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: stretch;
	box-sizing: border-box;
	width: 41.7rem;
	height: 33.9rem;
	padding: 0 0.7rem;
	overflow: scroll;
`;
