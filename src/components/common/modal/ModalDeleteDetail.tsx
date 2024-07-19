import styled from '@emotion/styled';

import ModalBackdrop from './ModalBackdrop';

import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';

interface ModalDeleteDetailProps {
	top: number;
	left: number;
	onClose: (e: React.MouseEvent) => void;
	onDelete: (e: React.MouseEvent) => void;
}

function ModalDeleteDetail({ top, left, onClose, onDelete }: ModalDeleteDetailProps) {
	return (
		<ModalBackdrop onClick={onClose}>
			<ModalDeleteDetailLayout top={top} left={left} onClick={(e) => e.stopPropagation()}>
				<DeleteCancelBtn status="cancel" onClick={onClose} />
				<DeleteCancelBtn status="delete" onClick={onDelete} />
			</ModalDeleteDetailLayout>
		</ModalBackdrop>
	);
}

const ModalDeleteDetailLayout = styled.div<{ top: number; left: number }>`
	position: fixed;
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;
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
