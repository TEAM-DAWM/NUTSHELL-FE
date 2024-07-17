import styled from '@emotion/styled';

import Images from '@/assets/images/index';

function EmptyContainer() {
	return (
		<EmptyWrapper>
			<ImageWrapper src={Images.EMPTY.taskImg} />
			<EmptyText>아직 할 일이 없어요</EmptyText>
		</EmptyWrapper>
	);
}

export default EmptyContainer;

const EmptyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const ImageWrapper = styled.img`
	width: 19rem;
	height: 19rem;
`;

const EmptyText = styled.p`
	display: flex;
	justify-content: center;

	${({ theme }) => theme.fontTheme.CAPTION_01};
	color: ${({ theme }) => theme.palette.Grey.Grey4};
`;
