import styled from '@emotion/styled';

import Images from '@/assets/images/index';
import DashboardTask from '@/components/DashboardPage/DashboardTask';
import DASHBOARD_TASK_TYPE from '@/constants/dashboardTask';

function DashboardTaskWrapper() {
	return (
		<DashBoardTaskWrapper>
			<DashboardTask
				text="upcoming"
				taskStatus={DASHBOARD_TASK_TYPE.UPCOMING}
				emptyStatus={DASHBOARD_TASK_TYPE.EMPTYTASK}
				emptyImg={Images.EMPTY.taskImg}
			/>
			<DashboardTask
				text="postponed"
				taskStatus={DASHBOARD_TASK_TYPE.POSTPONED}
				emptyStatus={DASHBOARD_TASK_TYPE.EMPTYPOSTPONE}
				emptyImg={Images.EMPTY.postponeImg}
			/>
			<DashboardTask
				text="inprogress"
				taskStatus={DASHBOARD_TASK_TYPE.INPROGRESS}
				emptyStatus={DASHBOARD_TASK_TYPE.EMPTYTASK}
				emptyImg={Images.EMPTY.taskImg}
			/>
		</DashBoardTaskWrapper>
	);
}

export default DashboardTaskWrapper;

const DashBoardTaskWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	padding-left: 0.7rem;
`;
