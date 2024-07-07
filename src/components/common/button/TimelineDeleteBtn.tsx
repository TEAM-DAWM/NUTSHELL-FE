import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const TimelineDeleteBtn = () => {
	return (
		<TimelineDeleteBtnLayout>
			<StyledTimelineDelete />
		</TimelineDeleteBtnLayout>
	);
};

export default TimelineDeleteBtn;

const TimelineDeleteBtnLayout = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 1.6rem;
	height: 1.6rem;

	background: ${({ theme }) => theme.palette.SECONDARY};
	border-radius: 50%;
`;

const StyledTimelineDelete = styled(Icons.TimelineDelete)`
	width: 1.2rem;
	height: 1.2rem;
`;
