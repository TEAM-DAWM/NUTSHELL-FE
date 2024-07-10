import styled from '@emotion/styled';

import SortBtn from '../../button/SortBtn';

function ModalArrange() {
	return (
		<ModalArrangeLayout>
			<SortBy>
				<SortBtn text="최신 등록순" />
				<SortBtn text="오래된 등록순" />
			</SortBy>
			<ModalArrangeLine />
			<SortBy>
				<SortBtn text="가까운 마감기한순" />
				<SortBtn text="먼 마감기한순" />
			</SortBy>
		</ModalArrangeLayout>
	);
}

export default ModalArrange;

const ModalArrangeLayout = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	gap: 1.2rem;
	align-items: center;
	justify-content: center;
	width: 10.6rem;
	height: 14.6rem;
	padding: 0.6rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	box-shadow: 0 0.3rem 0.8rem 0 rgb(0 0 0 / 32%);
	border-radius: 10px;
`;

const SortBy = styled.div`
	display: flex;
	flex-direction: column;
`;

const ModalArrangeLine = styled.div`
	display: flex;
	width: 11.8rem;
	height: 0.1rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey2};
`;
