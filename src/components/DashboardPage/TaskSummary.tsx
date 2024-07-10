import styled from '@emotion/styled';

import sampleImg from '@/assets/images/sample.png';
import PERIOD from '@/constants/tasksPeriod';

interface TaskSummaryProps {
	text: 'complete' | 'postponed' | 'inprogress';
}

function TaskSummary({ text }: TaskSummaryProps) {
	const TASK_SUMMARY_TYPE = {
		COMPLETE: '완료한 할 일 갯수',
		POSTPONED: '평균 진행중인 할 일 갯수',
		INPROGRESS: '진행중인 할 일',
	};
	let summaryTask = '';
	if (text === 'complete') {
		summaryTask = TASK_SUMMARY_TYPE.COMPLETE;
	} else if (text === 'postponed') {
		summaryTask = TASK_SUMMARY_TYPE.POSTPONED;
	} else if (text === 'inprogress') {
		summaryTask = TASK_SUMMARY_TYPE.INPROGRESS;
	}

	let summaryNumber = 0;
	if (text === 'complete') {
		summaryNumber = PERIOD.data.completeTasks;
	} else if (text === 'postponed') {
		summaryNumber = PERIOD.data.avgDeferredRate;
	} else if (text === 'inprogress') {
		summaryNumber = PERIOD.data.avgInprogressTasks;
	}
	return (
		<TaskSummaryLayout>
			<ProfileImg src={sampleImg} alt="프로필" />
			<TextWrapper>
				<SummaryText text={text}>{summaryTask}</SummaryText>
				<NumberTaskBox>
					<Number>{summaryNumber}</Number>
					<NumberText>개</NumberText>
				</NumberTaskBox>
			</TextWrapper>
		</TaskSummaryLayout>
	);
}

export default TaskSummary;

const TaskSummaryLayout = styled.div`
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
	justify-content: center;
	box-sizing: border-box;
	width: 41.7rem;
	height: 18.8rem;
	padding-left: 2.8rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 16px;
`;

const ProfileImg = styled.img`
	width: 4.4rem;
	height: 4.4rem;
	margin: 3rem 34.5rem 0 0;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 38.9rem;
	height: 6.4rem;
	margin-bottom: 3rem;
`;

const SummaryText = styled.p<{ text: string }>`
	${({ theme }) => theme.fontTheme.HEADLINE_03}
	color: ${({ theme }) => theme.palette.Grey.Grey7}
`;

const NumberTaskBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Number = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_02};
	color: ${({ theme }) => theme.palette.Grey.Grey8};
`;

const NumberText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
	color: ${({ theme }) => theme.palette.Grey.Grey7};
`;
