import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import DashboardTaskWrapper from '@/components/DashboardPage/DashboardTaskWrapper';
import DateArea from '@/components/DashboardPage/DateArea';
import TaskSummary from '@/components/DashboardPage/TaskSummary';
import PERIOD from '@/constants/tasksPeriod';
import getNameOfDayKor from '@/utils/getNameOfDayKor';
import getToday from '@/utils/getToday';

function DashBoard() {
	const SUMMARY_INFO = [
		{
			name: 'complete',
			text: '완료한 할 일 갯수',
			data: PERIOD.data.completeTasks,
			unit: '개',
			icon: Icons.Dashboard_Complete,
			imagePate: 'src/assets/images/Dashboard_Complete.png',
		},
		{
			name: 'postponed',
			text: '평균 지연율',
			data: PERIOD.data.avgDeferredRate,
			unit: '%',
			icon: Icons.DashboardPostpone,
			imagePate: 'src/assets/images/Dashboard_Postpone.png',
		},
		{
			name: 'inprogress',
			text: '평균 진행중인 할 일 갯수',
			data: PERIOD.data.avgInprogressTasks,
			unit: '개',
			icon: Icons.DashboardProgress,
			imagePate: 'src/assets/images/Dashboard_Progress.png',
		},
	];
	const today = new Date();
	const dayOfTheWeekKor = today.getDay();
	const { year, month, date } = getToday();

	return (
		<DashBoardLayout>
			<DateContainer>
				<DateText>
					{year}년 {month}월 {date}일
				</DateText>
				<DayText>{getNameOfDayKor(dayOfTheWeekKor)}</DayText>
			</DateContainer>
			<DashboardTaskWrapper />
			<DataWrapper>
				<DateArea isHover isPressed />
			</DataWrapper>
			<TaskSummaryWrapper>
				{SUMMARY_INFO.map((info) => (
					<TaskSummary
						key={info.name}
						text={info.text}
						data={info.data}
						unit={info.unit}
						icon={info.icon}
						image={info.imagePate}
					/>
				))}
			</TaskSummaryWrapper>
		</DashBoardLayout>
	);
}

export default DashBoard;

const DashBoardLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 127.8rem;
	height: 100vh;
`;

const DateContainer = styled.div`
	display: flex;
	align-items: end;
	justify-content: flex-start;
	width: 25.3rem;
	padding: 2.8rem 2.1rem 2.2rem;
`;

const DateText = styled.h1`
	${({ theme }) => theme.fontTheme.HEADLINE_01}
	color : ${({ theme }) => theme.palette.Grey.Black}
`;

const DayText = styled.p`
	margin: 0.8rem 0.8rem 0;
	padding-bottom: 0.1rem;

	${({ theme }) => theme.fontTheme.LABEL_01};
	color: ${({ theme }) => theme.palette.Grey.Grey6};
`;

const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 100%;
	height: 6.7rem;
	margin-top: 1rem;
`;

const TaskSummaryWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	width: 100%;
	height: 21.4rem;
	padding: 0 0 2.8rem 0.7rem;
`;
