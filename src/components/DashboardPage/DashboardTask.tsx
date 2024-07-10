import styled from '@emotion/styled';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import DASHBOARD_TASK_TYPE from '@/constants/dashboardTask';
import TODAY from '@/constants/tasksToday';

interface DashboardTaskProps {
	text: 'upcoming' | 'postponed' | 'inprogress';
}

function DashboardTask({ text }: DashboardTaskProps) {
	let taskStatus = '';
	if (text === 'upcoming') {
		taskStatus = DASHBOARD_TASK_TYPE.UPCOMING;
	} else if (text === 'postponed') {
		taskStatus = DASHBOARD_TASK_TYPE.POSTPONED;
	} else if (text === 'inprogress') {
		taskStatus = DASHBOARD_TASK_TYPE.INPROGRESS;
	}
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
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
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
