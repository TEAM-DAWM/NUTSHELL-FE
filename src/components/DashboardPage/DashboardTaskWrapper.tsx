import styled from '@emotion/styled';

import DashboardTask from '@/components/DashboardPage/DashboardTask';

function DashboardTaskWrapper() {
	return (
		<DashBoardTaskWrapper>
			<DashboardTask text="upcoming" status="upcoming" />
			<DashboardTask text="postponed" status="postpone" />
			<DashboardTask text="inprogress" status="inprogress" />
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
