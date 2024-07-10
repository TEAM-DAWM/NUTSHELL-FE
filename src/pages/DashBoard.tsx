import styled from '@emotion/styled';

import DashboardTask from '@/components/DashboardPage/DashboardTask';
import TaskSummary from '@/components/DashboardPage/TaskSummary';
import PERIOD from '@/constants/tasksPeriod';

function DashBoard() {
	const SUMMARY_INFO = [
		{
			name: 'complete',
			text: '완료한 할 일 갯수',
			data: PERIOD.data.completeTasks,
			unit: '개',
		},
		{
			name: 'postponed',
			text: '평균 지연율',
			data: PERIOD.data.avgDeferredRate,
			unit: '%',
		},
		{
			name: 'inprogress',
			text: '평균 진행중인 할 일 갯수',
			data: PERIOD.data.avgInprogressTasks,
			unit: '개',
		},
	];

	return (
		<DashBoardWrapper>
			<DashboardTask text="upcoming" />
			<TaskSummaryWrapper>
				{SUMMARY_INFO.map((info) => (
					<TaskSummary key={info.name} text={info.text} data={info.data} unit={info.unit} />
				))}
			</TaskSummaryWrapper>
		</DashBoardWrapper>
	);
}

export default DashBoard;

const DashBoardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 127.8rem;
	height: 100vh;
`;

const TaskSummaryWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	height: 21.4rem;
	padding: 0 0 2.8rem 0.7rem;
`;
