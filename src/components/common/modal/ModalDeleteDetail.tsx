import styled from '@emotion/styled';

import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';

function ModalDeleteDetail() {
	return (
		<ModalDeleteDetailLayout>
			<DeleteCancelBtn status="cancel" />
			<DeleteCancelBtn status="delete" />
		</ModalDeleteDetailLayout>
	);
}

const ModalDeleteDetailLayout = styled.div`
	position: absolute;
	top: 0.6rem;
	left: -0.2rem;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 13.6rem;
	height: 7.4rem;
	padding: 0.3rem;

	background-color: ${({ theme }) => theme.palette.Grey.White};
	box-shadow: 0 16px 35px 0 rgb(72 87 120 / 25%);
	border-radius: 10px;
`;
export default ModalDeleteDetail;
