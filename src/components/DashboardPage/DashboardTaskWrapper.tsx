import styled from '@emotion/styled';

import DashboardTask from '@/components/DashboardPage/DashboardTask';

const DashboardTaskWrapper = () => {
	return (
		<DashBoardTaskWrapper>
			<DashboardTask text="upcoming" />
			<DashboardTask text="postponed" />
			<DashboardTask text="inprogress" />
		</DashBoardTaskWrapper>
	);
};

export default DashboardTaskWrapper;

const DashBoardTaskWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	padding-left: 0.7rem;
`;
