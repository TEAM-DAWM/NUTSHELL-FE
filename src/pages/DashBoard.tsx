import styled from '@emotion/styled';

import DateCorrectionModal from '@/components/common/datePicker/DateCorrectionModal';
import DatePickerCustom from '@/components/common/datePicker/DatePickerCustom';
import DashboardTask from '@/components/DashboardPage/DashboardTask';
import TaskSummary from '@/components/DashboardPage/TaskSummary';
import PERIOD from '@/constants/tasksPeriod';
import getNameOfDayKor from '@/utils/getNameOfDayKor';
import getTodayDate from '@/utils/getTodayDate';

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
	const today = new Date();
	const dayOfTheWeekKor = today.getDay();

	return (
		<DashBoardLayout>
			<DateContainer>
				<DateText>{getTodayDate()}</DateText>
				<DayText>{getNameOfDayKor(dayOfTheWeekKor)}</DayText>
			</DateContainer>
			<DashBoardTaskWrapper>
				<DashboardTask text="upcoming" />
				<DashboardTask text="postponed" />
				<DashboardTask text="inprogress" />
			</DashBoardTaskWrapper>
			<TaskSummaryWrapper>
				{SUMMARY_INFO.map((info) => (
					<TaskSummary key={info.name} text={info.text} data={info.data} unit={info.unit} />
				))}
			</TaskSummaryWrapper>
			<DateCorrectionModal isDateOnly />
			<DateCorrectionModal isDateOnly={false} />
			<DatePickerCustom />
		</DashBoardLayout>
	);
}

export default DashBoard;

const DashBoardLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 127.8rem;
	height: 100vh;
`;

const DateContainer = styled.div`
	display: flex;
	align-items: end;
	justify-content: flex-start;
	width: 25.3rem;
	height: 7.7rem;
	padding: 2.8rem 2.2rem 2.1rem;
`;

const DateText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_01}
	color : ${({ theme }) => theme.palette.Grey.Black}
`;

const DayText = styled.p`
	margin: 0 0 0.1rem 0.8rem;

	${({ theme }) => theme.fontTheme.LABEL_01};
	color: ${({ theme }) => theme.palette.Grey.Grey6};
`;

const DashBoardTaskWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	padding-left: 0.7rem;
`;

const TaskSummaryWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	height: 21.4rem;
	padding: 0 0 2.8rem 0.7rem;
`;
