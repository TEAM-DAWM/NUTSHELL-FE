import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface DeleteCancelBtnProps {
	status: 'delete' | 'cancel';
	onClick?: (e: React.MouseEvent) => void;
}

function DeleteCancelBtn({ status, onClick }: DeleteCancelBtnProps) {
	return (
		<div>
			{status === 'delete' ? (
				<DeleteBtn onClick={onClick}>삭제</DeleteBtn>
			) : (
				<CancelBtn onClick={onClick}>취소</CancelBtn>
			)}
		</div>
	);
}

export default DeleteCancelBtn;

const DeleteCancelBtnCss = css`
	display: flex;
	align-items: center;
	align-self: stretch;
	width: 13rem;
	height: 3.2rem;
	padding: 0.7rem 1.2rem;

	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
	border-radius: 8px;
`;

const DeleteBtn = styled.button`
	${DeleteCancelBtnCss}
	color: ${({ theme }) => theme.palette.Grey.White};

	background-color: ${({ theme }) => theme.palette.Secondary};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		background-color: ${({ theme }) => theme.palette.Orange.Orange7};
	}
`;

const CancelBtn = styled.button`
	${DeleteCancelBtnCss}
	color: ${({ theme }) => theme.palette.Grey.Grey5};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		color: ${({ theme }) => theme.palette.Grey.Grey6};

		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}
`;
